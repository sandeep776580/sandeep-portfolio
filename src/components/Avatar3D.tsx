"use client";

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

function Face() {
  const groupRef = React.useRef<THREE.Group>(null);
  const leftEyeRef = React.useRef<THREE.Group>(null);
  const rightEyeRef = React.useRef<THREE.Group>(null);
  const leftEyelidRef = React.useRef<THREE.Mesh>(null);
  const rightEyelidRef = React.useRef<THREE.Mesh>(null);
  const mouthRef = React.useRef<THREE.Group>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    // Head bobbing and rotation
    if (groupRef.current) {
      groupRef.current.rotation.x = Math.sin(t * 0.4) * 0.2;
      groupRef.current.rotation.z = Math.cos(t * 0.25) * 0.12;
      groupRef.current.position.y = Math.sin(t * 0.5) * 0.35;
    }

    // Blinking eyes (every 3 seconds, blink lasts 0.3 seconds)
    const blinkCycle = (t % 3) / 3;
    const isBinking = blinkCycle > 0.85 && blinkCycle < 1.0;
    const blinkAmount = isBinking ? Math.sin((blinkCycle - 0.85) / 0.15 * Math.PI) : 0;

    if (leftEyelidRef.current) {
      leftEyelidRef.current.scale.y = 0.1 + blinkAmount * 0.5;
      leftEyelidRef.current.position.y = 0.25 - blinkAmount * 0.15;
    }
    if (rightEyelidRef.current) {
      rightEyelidRef.current.scale.y = 0.1 + blinkAmount * 0.5;
      rightEyelidRef.current.position.y = 0.25 - blinkAmount * 0.15;
    }

    // Eye pupils tracking
    if (leftEyeRef.current) {
      const pupilL = leftEyeRef.current.children[1] as THREE.Mesh;
      if (pupilL) {
        pupilL.position.x = Math.sin(t * 1.2) * 0.12;
        pupilL.position.y = Math.cos(t * 0.9) * 0.12;
      }
    }

    if (rightEyeRef.current) {
      const pupilR = rightEyeRef.current.children[1] as THREE.Mesh;
      if (pupilR) {
        pupilR.position.x = Math.sin(t * 1.2) * 0.12;
        pupilR.position.y = Math.cos(t * 0.9) * 0.12;
      }
    }

    // Mouth animation (multiple expressions)
    if (mouthRef.current) {
      const mouthPhase = (t * 0.6) % 4; // Cycle through expressions

      if (mouthPhase < 1.5) {
        // Smile
        mouthRef.current.scale.y = 0.9;
        mouthRef.current.scale.x = 1.0;
      } else if (mouthPhase < 2.5) {
        // Neutral (slight open)
        mouthRef.current.scale.y = 0.5;
        mouthRef.current.scale.x = 0.95;
      } else {
        // Talking (open-close animation)
        const talkSpeed = Math.sin((mouthPhase - 2.5) * Math.PI * 3);
        mouthRef.current.scale.y = 0.5 + talkSpeed * 0.3;
        mouthRef.current.scale.x = 1.0;
      }

      // Move mouth slightly
      mouthRef.current.position.y = -0.28 + Math.sin(t * 1.1) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Head */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial color="#e8a87c" shininess={85} />
      </mesh>

      {/* Left Eye */}
      <group ref={leftEyeRef} position={[-0.35, 0.3, 0.95]}>
        {/* Sclera (white of eye) */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>
        {/* Pupil */}
        <mesh position={[0, 0, 0.15]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshPhongMaterial color="#1a1a1a" />
        </mesh>
      </group>

      {/* Left Eyelid */}
      <mesh ref={leftEyelidRef} position={[-0.35, 0.25, 0.98]}>
        <boxGeometry args={[0.52, 0.1, 0.05]} />
        <meshPhongMaterial color="#d4956f" />
      </mesh>

      {/* Right Eye */}
      <group ref={rightEyeRef} position={[0.35, 0.3, 0.95]}>
        {/* Sclera */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.25, 24, 24]} />
          <meshPhongMaterial color="#ffffff" />
        </mesh>
        {/* Pupil */}
        <mesh position={[0, 0, 0.15]}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshPhongMaterial color="#1a1a1a" />
        </mesh>
      </group>

      {/* Right Eyelid */}
      <mesh ref={rightEyelidRef} position={[0.35, 0.25, 0.98]}>
        <boxGeometry args={[0.52, 0.1, 0.05]} />
        <meshPhongMaterial color="#d4956f" />
      </mesh>

      {/* Nose */}
      <mesh position={[0, 0.05, 1]}>
        <coneGeometry args={[0.15, 0.35, 16]} />
        <meshPhongMaterial color="#d4956f" />
      </mesh>

      {/* Mouth */}
      <group ref={mouthRef} position={[0, -0.28, 0.95]}>
        <mesh>
          <torusGeometry args={[0.28, 0.065, 8, 32]} />
          <meshPhongMaterial color="#d16d73" />
        </mesh>
      </group>

      {/* Left Ear */}
      <mesh position={[-1, 0.15, 0.3]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshPhongMaterial color="#e8a87c" />
      </mesh>

      {/* Right Ear */}
      <mesh position={[1, 0.15, 0.3]}>
        <sphereGeometry args={[0.2, 16, 16]} />
        <meshPhongMaterial color="#e8a87c" />
      </mesh>

      {/* Left Eyebrow */}
      <mesh position={[-0.35, 0.6, 0.9]}>
        <boxGeometry args={[0.32, 0.08, 0.025]} />
        <meshPhongMaterial color="#6b5344" />
      </mesh>

      {/* Right Eyebrow */}
      <mesh position={[0.35, 0.6, 0.9]}>
        <boxGeometry args={[0.32, 0.08, 0.025]} />
        <meshPhongMaterial color="#6b5344" />
      </mesh>
    </group>
  );
}

export default function Avatar3D() {
  return (
    <div className="w-full h-screen flex items-center justify-center relative">
      <Canvas camera={{ position: [0, 0, 2.5], fov: 75 }} className="absolute inset-0">
        <PerspectiveCamera makeDefault position={[0, 0, 2.5]} />
        <ambientLight intensity={0.7} />
        <pointLight position={[5, 5, 5]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-5, -3, 2]} intensity={0.6} color="#a78bfa" />
        <pointLight position={[0, 0, 3]} intensity={0.4} color="#fbbf24" />
        <Environment preset="studio" />
        <Face />
        <OrbitControls enableZoom={false} autoRotate={false} />
      </Canvas>
    </div>
  );
}
