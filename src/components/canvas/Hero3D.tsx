import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const particleCount = 1000;
const positions = new Float32Array(particleCount * 3);
for (let i = 0; i < particleCount; i++) {
  const r = (i / particleCount) * 16 + 2;
  const theta = (i * 0.1) % (Math.PI * 2);
  const phi = Math.acos(((i % 100) / 50) - 1);

  positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
  positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
  positions[i * 3 + 2] = r * Math.cos(phi);
}

export default function Hero3D() {
  const meshRef = useRef<THREE.Mesh>(null);
  const outerRingRef = useRef<THREE.Mesh>(null);
  const particlesRef = useRef<THREE.Points>(null);

  useFrame((_, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2;
      meshRef.current.rotation.y += delta * 0.25;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z -= delta * 0.15;
      outerRingRef.current.rotation.x += delta * 0.1;
    }
    if (particlesRef.current) {
      particlesRef.current.rotation.y += delta * 0.03;
    }
  });

  return (
    <group position={[0, 0, 0]}>
      {/* Central High-Performance Ice Glass Cyber Core */}
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.6}>
          <dodecahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color="#bae6fd"
            emissive="#0284c7"
            emissiveIntensity={0.4}
            roughness={0.1}
            metalness={0.9}
            wireframe
          />
        </mesh>
      </Float>

      {/* Orbiting Ring */}
      <mesh ref={outerRingRef} scale={2.6}>
        <torusGeometry args={[1.2, 0.015, 16, 100]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.6}
          wireframe
        />
      </mesh>

      {/* Illuminated Ambient Aurora Particles */}
      <points ref={particlesRef}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[positions, 3]}
          />
        </bufferGeometry>
        <pointsMaterial
          size={0.06}
          color="#06b6d4"
          transparent
          opacity={0.5}
          blending={THREE.AdditiveBlending}
        />
      </points>

      <pointLight position={[0, 0, 0]} intensity={3} color="#06b6d4" distance={10} />
    </group>
  );
}
