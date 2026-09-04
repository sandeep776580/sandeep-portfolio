"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Core() {
  const core = useRef<THREE.Group>(null);
  const ring = useRef<THREE.Group>(null);

  useFrame(({ clock, pointer }) => {
    const t = clock.getElapsedTime();
    if (core.current) {
      core.current.rotation.y = t * 0.22 + pointer.x * 0.2;
      core.current.rotation.x = Math.sin(t * 0.35) * 0.12 + pointer.y * 0.12;
    }
    if (ring.current) ring.current.rotation.z = -t * 0.32;
  });

  return (
    <group>
      <Float speed={1.25} rotationIntensity={0.25} floatIntensity={0.6}>
        <group ref={core}>
          <mesh>
            <icosahedronGeometry args={[1.22, 2]} />
            <meshStandardMaterial color="#7dd3fc" emissive="#0e7490" emissiveIntensity={1.6} roughness={0.25} metalness={0.82} wireframe />
          </mesh>
          <mesh scale={0.67}>
            <icosahedronGeometry args={[1, 2]} />
            <meshStandardMaterial color="#ecfeff" emissive="#22d3ee" emissiveIntensity={2.2} roughness={0.15} metalness={0.5} />
          </mesh>
        </group>
      </Float>
      <group ref={ring} rotation={[Math.PI / 2.6, 0, 0.35]}>
        <mesh><torusGeometry args={[1.75, 0.016, 8, 96]} /><meshBasicMaterial color="#67e8f9" transparent opacity={0.7} /></mesh>
        <mesh rotation={[0.75, 0, 0]}><torusGeometry args={[2.18, 0.009, 8, 96]} /><meshBasicMaterial color="#a5f3fc" transparent opacity={0.38} /></mesh>
      </group>
    </group>
  );
}

export default function CoreScene() {
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0, 5.5], fov: 45 }} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.55} />
    <pointLight position={[3, 3, 3]} intensity={30} color="#67e8f9" />
    <pointLight position={[-3, -2, 2]} intensity={18} color="#6ee7db" />
    <Core />
    <Stars radius={12} depth={18} count={120} factor={1.5} saturation={0} fade speed={0.35} />
  </Canvas>;
}
