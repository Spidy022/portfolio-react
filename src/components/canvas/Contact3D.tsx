import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

export default function Contact3D() {
  const gridRef = useRef<THREE.GridHelper>(null);
  const coreRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (gridRef.current) {
      gridRef.current.position.z = (gridRef.current.position.z + delta * 1.2) % 2;
    }
    if (coreRef.current) {
      coreRef.current.rotation.y += delta * 0.4;
      coreRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <group position={[0, -2, -45]}>
      <gridHelper
        ref={gridRef}
        args={[60, 40, '#06b6d4', '#cbd5e1']}
        position={[0, -1, 0]}
      />

      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.6}>
        <mesh ref={coreRef} position={[0, 2, -5]} scale={1.8}>
          <icosahedronGeometry args={[1, 1]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0284c7"
            emissiveIntensity={0.6}
            roughness={0.2}
            wireframe
          />
        </mesh>
      </Float>

      <pointLight position={[0, 2, -5]} intensity={5} color="#06b6d4" distance={20} />
    </group>
  );
}
