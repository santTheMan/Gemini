"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import { Starfield } from "./starfield";
import { Nebula } from "./nebula";

type SceneProps = {
  /** 0..1 scroll progress through the hero (driven by GSAP). */
  progressRef: React.MutableRefObject<number>;
  reducedMotion?: boolean;
};

function CameraRig({
  progressRef,
  reducedMotion,
}: {
  progressRef: React.MutableRefObject<number>;
  reducedMotion?: boolean;
}) {
  const target = useRef(new THREE.Vector3(0, 0, 0));

  useFrame(({ camera, pointer }, dt) => {
    const p = progressRef.current;
    // Camera drifts forward as the user scrolls; subtle pointer parallax for life.
    const targetZ = 18 - p * 14;
    const targetY = -p * 1.6;
    const drift = reducedMotion ? 0 : 0.6;
    const desiredX = pointer.x * drift + Math.sin(p * 2.4) * 0.4;
    const desiredY = targetY + pointer.y * (drift * 0.5);

    camera.position.x += (desiredX - camera.position.x) * Math.min(1, dt * 2.2);
    camera.position.y += (desiredY - camera.position.y) * Math.min(1, dt * 2.2);
    camera.position.z += (targetZ - camera.position.z) * Math.min(1, dt * 1.8);

    target.current.set(0, targetY * 0.4, -10);
    camera.lookAt(target.current);
  });

  return null;
}

export function CosmosScene({ progressRef, reducedMotion = false }: SceneProps) {
  const canvasKey = useRef(0);

  // Recreate canvas on visibility change to drop GPU memory if the user tabs away for a while.
  useEffect(() => {
    const handle = () => {
      if (document.hidden) return;
    };
    document.addEventListener("visibilitychange", handle);
    return () => document.removeEventListener("visibilitychange", handle);
  }, []);

  return (
    <Canvas
      key={canvasKey.current}
      gl={{
        antialias: false,
        alpha: false,
        powerPreference: "high-performance",
        toneMapping: THREE.ACESFilmicToneMapping,
      }}
      dpr={[1, 1.6]}
      camera={{ position: [0, 0, 18], fov: 60, near: 0.1, far: 300 }}
      style={{ position: "absolute", inset: 0 }}
    >
      <color attach="background" args={["#040404"]} />
      <fog attach="fog" args={["#040404", 40, 160]} />
      <Nebula />
      <Starfield count={reducedMotion ? 1800 : 4200} twinkle={!reducedMotion} />
      <CameraRig progressRef={progressRef} reducedMotion={reducedMotion} />
    </Canvas>
  );
}
