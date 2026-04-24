"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const VERT = /* glsl */ `
  varying vec3 vWorld;
  void main() {
    vec4 wp = modelMatrix * vec4(position, 1.0);
    vWorld = wp.xyz;
    gl_Position = projectionMatrix * viewMatrix * wp;
  }
`;

const FRAG = /* glsl */ `
  varying vec3 vWorld;
  uniform float uTime;

  // Simplex-style hash noise — small + cheap, good enough for haze
  float hash(vec3 p) {
    p = fract(p * 0.3183099 + .1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }
  float noise(vec3 p) {
    vec3 i = floor(p);
    vec3 f = fract(p);
    f = f * f * (3.0 - 2.0 * f);
    return mix(
      mix(mix(hash(i + vec3(0,0,0)), hash(i + vec3(1,0,0)), f.x),
          mix(hash(i + vec3(0,1,0)), hash(i + vec3(1,1,0)), f.x), f.y),
      mix(mix(hash(i + vec3(0,0,1)), hash(i + vec3(1,0,1)), f.x),
          mix(hash(i + vec3(0,1,1)), hash(i + vec3(1,1,1)), f.x), f.y), f.z);
  }
  float fbm(vec3 p) {
    float v = 0.0;
    float a = 0.5;
    for (int i = 0; i < 4; i++) {
      v += a * noise(p);
      p *= 2.0;
      a *= 0.5;
    }
    return v;
  }

  void main() {
    vec3 p = vWorld * 0.012 + vec3(uTime * 0.012, uTime * 0.008, 0.0);
    float n = fbm(p);
    n = smoothstep(0.45, 0.85, n);
    // Cool blue-violet drift, very low intensity to keep it editorial
    vec3 col = mix(vec3(0.06, 0.07, 0.11), vec3(0.30, 0.22, 0.35), n);
    col += vec3(0.04, 0.03, 0.06) * pow(n, 2.0);
    float alpha = n * 0.42;
    gl_FragColor = vec4(col, alpha);
  }
`;

export function Nebula() {
  const ref = useRef<THREE.Mesh>(null);
  const uniforms = useMemo(() => ({ uTime: { value: 0 } }), []);

  useFrame((_, dt) => {
    uniforms.uTime.value += dt;
    if (ref.current) ref.current.rotation.y += dt * 0.005;
  });

  return (
    <mesh ref={ref} position={[0, 0, -45]} scale={[110, 70, 1]}>
      <planeGeometry args={[1, 1, 1, 1]} />
      <shaderMaterial
        transparent
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        uniforms={uniforms}
        vertexShader={VERT}
        fragmentShader={FRAG}
      />
    </mesh>
  );
}
