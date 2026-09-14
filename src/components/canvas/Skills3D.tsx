import { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';
import * as THREE from 'three';

const skillsList = [
  { name: 'React 19', pos: [2.5, 1.2, 0] },
  { name: 'TypeScript', pos: [-2.4, -1.0, 0.5] },
  { name: 'Tailwind CSS', pos: [1.8, -2.1, -0.8] },
  { name: 'Python / C++', pos: [-2.2, 1.8, -0.5] },
  { name: 'PostgreSQL', pos: [0, 2.6, 1.2] },
  { name: 'Figma UI/UX', pos: [0, -2.7, -1.0] },
  { name: 'Node.js', pos: [-3.0, 0.2, -1.2] },
  { name: 'WebSockets', pos: [3.1, -0.5, 0.8] }
];

export default function Skills3D() {
  const groupRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group position={[0, 0, -5]} ref={groupRef}>
      {/* Central Orbit Anchor Ring */}
      <mesh scale={3.4} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1, 0.01, 16, 100]} />
        <meshStandardMaterial color="#334155" wireframe />
      </mesh>

      {skillsList.map((skill, i) => (
        <Float key={i} speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <group
            position={skill.pos as [number, number, number]}
            onPointerOver={() => setHovered(i)}
            onPointerOut={() => setHovered(null)}
          >
            <mesh scale={hovered === i ? 1.25 : 1}>
              <sphereGeometry args={[0.25, 16, 16]} />
              <meshStandardMaterial
                color={hovered === i ? '#10b981' : '#38bdf8'}
                emissive={hovered === i ? '#10b981' : '#0284c7'}
                emissiveIntensity={hovered === i ? 1.5 : 0.4}
                roughness={0.2}
              />
            </mesh>
            <Text
              position={[0, -0.45, 0]}
              fontSize={0.28}
              color={hovered === i ? '#10b981' : '#f8fafc'}
              anchorX="center"
              anchorY="middle"
            >
              {skill.name}
            </Text>
          </group>
        </Float>
      ))}
    </group>
  );
}
