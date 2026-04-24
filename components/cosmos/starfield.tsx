"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

type StarfieldProps = {
  count?: number;
  radius?: number;
  twinkle?: boolean;
};

const FRAGMENT_SHADER = /* glsl */ `
  varying float vIntensity;
  void main() {
    vec2 c = gl_PointCoord - vec2(0.5);
    float d = length(c);
    if (d > 0.5) discard;
    float falloff = smoothstep(0.5, 0.0, d);
    float core = smoothstep(0.18, 0.0, d);
    float a = (falloff * 0.55) + (core * 0.85);
    gl_FragColor = vec4(vec3(1.0) * vIntensity, a * vIntensity);
  }
`;

const VERTEX_SHADER = /* glsl */ `
  attribute float aSize;
  attribute float aSeed;
  uniform float uTime;
  uniform float uTwinkle;
  varying float vIntensity;
  void main() {
    vec4 mv = modelViewMatrix * vec4(position, 1.0);
    float t = uTime * 0.6 + aSeed * 6.2831;
    float twinkle = mix(1.0, 0.55 + 0.45 * sin(t), uTwinkle);
    vIntensity = clamp(twinkle, 0.25, 1.0);
    gl_PointSize = aSize * (300.0 / -mv.z);
    gl_Position = projectionMatrix * mv;
  }
`;

export function Starfield({ count = 4200, radius = 90, twinkle = true }: StarfieldProps) {
  const ref = useRef<THREE.Points>(null);

  const { positions, sizes, seeds } = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    const seeds = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      // Sphere distribution biased outward so foreground feels emptier
      const u = Math.random();
      const r = radius * (0.35 + 0.65 * Math.cbrt(u));
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
      // Few large stars, many small ones
      const roll = Math.random();
      sizes[i] = roll > 0.985 ? 3.4 : roll > 0.92 ? 1.8 : roll > 0.6 ? 1.1 : 0.7;
      seeds[i] = Math.random();
    }
    return { positions, sizes, seeds };
  }, [count, radius]);

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uTwinkle: { value: twinkle ? 1 : 0 },
    }),
    [twinkle],
  );

  useFrame((_, dt) => {
    uniforms.uTime.value += dt;
    if (ref.current) {
      ref.current.rotation.y += dt * 0.008;
      ref.current.rotation.x += dt * 0.003;
    }
  });

  return (
    <points ref={ref} frustumCulled={false}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-aSize"
          count={sizes.length}
          array={sizes}
          itemSize={1}
        />
        <bufferAttribute
          attach="attributes-aSeed"
          count={seeds.length}
          array={seeds}
          itemSize={1}
        />
      </bufferGeometry>
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={VERTEX_SHADER}
        fragmentShader={FRAGMENT_SHADER}
      />
    </points>
  );
}
