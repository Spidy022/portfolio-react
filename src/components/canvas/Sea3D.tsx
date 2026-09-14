import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';

export default function Sea3D() {
  const meshRef = useRef<THREE.Mesh>(null);

  const { geometry } = useMemo(() => {
    const geo = new THREE.PlaneGeometry(120, 120, 48, 48);
    geo.rotateX(-Math.PI / 2);
    return { geometry: geo };
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      const posAttr = meshRef.current.geometry.attributes.position;
      for (let i = 0; i < posAttr.count; i++) {
        const x = posAttr.getX(i);
        const z = posAttr.getZ(i);
        const y = Math.sin(x * 0.12 + time * 1.2) * 0.3 + Math.cos(z * 0.12 + time * 1.0) * 0.3;
        posAttr.setY(i, y);
      }
      posAttr.needsUpdate = true;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} position={[0, -10, -30]}>
      <meshStandardMaterial
        color="#bae6fd"
        emissive="#0284c7"
        emissiveIntensity={0.2}
        roughness={0.1}
        metalness={0.9}
        wireframe={false}
        flatShading
      />
    </mesh>
  );
}
