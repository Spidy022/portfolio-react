import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function About3D() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
    }
    if (ring1Ref.current) {
      ring1Ref.current.rotation.x += delta * 0.3;
      ring1Ref.current.rotation.z += delta * 0.2;
    }
    if (ring2Ref.current) {
      ring2Ref.current.rotation.y -= delta * 0.35;
      ring2Ref.current.rotation.x -= delta * 0.15;
    }
  });

  return (
    <group position={[0, -2, -2]}>
      {/* High-Tech Ice Holographic Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
        <mesh ref={coreRef} scale={1.2}>
          <icosahedronGeometry args={[1, 2]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0284c7"
            emissiveIntensity={0.4}
            roughness={0.2}
            metalness={0.8}
            wireframe
          />
        </mesh>
      </Float>

      {/* Orbiting Data Ring 1 */}
      <mesh ref={ring1Ref} scale={2.2}>
        <torusGeometry args={[1, 0.015, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={0.6} />
      </mesh>

      {/* Orbiting Data Ring 2 */}
      <mesh ref={ring2Ref} scale={2.6} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshStandardMaterial color="#0d9488" emissive="#0d9488" emissiveIntensity={0.6} />
      </mesh>

      <pointLight position={[0, 0, 0]} intensity={3} color="#06b6d4" distance={8} />
    </group>
  );
}
