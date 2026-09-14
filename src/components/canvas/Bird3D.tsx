import { useRef, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import * as THREE from 'three';

export default function Bird3D() {
  const group = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { scene, animations } = useGLTF('/phoenix_bird.glb');
  const { actions, names } = useAnimations(animations, group);

  useEffect(() => {
    if (names.length > 0 && actions[names[0]]) {
      actions[names[0]]?.reset().fadeIn(0.5).play();
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseRef.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [actions, names]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (group.current) {
      // Smooth interactive cursor tracking and flight tilt
      const targetX = mouseRef.current.x * 1.5;
      const targetY = -mouseRef.current.y * 0.8 + 0.1;

      group.current.position.x = THREE.MathUtils.lerp(group.current.position.x, targetX, 0.04);
      group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, targetY + Math.sin(time * 1.5) * 0.2, 0.04);

      // Roll bank reaction based on horizontal velocity
      const tiltZ = (targetX - group.current.position.x) * 0.4;
      group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, tiltZ, 0.05);
      group.current.rotation.y = Math.PI + (targetX - group.current.position.x) * 0.2;
    }
  });

  return (
    <group ref={group} position={[0, 0.1, 7]} scale={0.0035}>
      <primitive object={scene} />
      <pointLight intensity={4} color="#f59e0b" distance={8} />
    </group>
  );
}

useGLTF.preload('/phoenix_bird.glb');
