import { useRef, useEffect, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero3D from './Hero3D';
import About3D from './About3D';
import Skills3D from './Skills3D';
import Projects3D from './Projects3D';
import Resume3D from './Resume3D';
import Contact3D from './Contact3D';
import Bird3D from './Bird3D';
import Sea3D from './Sea3D';
import Mountain3D from './Mountain3D';
import Clouds3D from './Clouds3D';

gsap.registerPlugin(ScrollTrigger);

function CameraRig() {
  const targetPos = useRef(new THREE.Vector3(0, 0, 12));
  const targetLookAt = useRef(new THREE.Vector3(0, 0, 0));
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current.x = (e.clientX / window.innerWidth - 0.5) * 0.6;
      mousePos.current.y = (e.clientY / window.innerHeight - 0.5) * 0.6;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '#scroll-root',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    // 1. Hero -> About
    tl.to(targetPos.current, { x: 0, y: -1, z: 4, duration: 1 })
      .to(targetLookAt.current, { x: 0, y: -2, z: -2, duration: 1 }, '<')
    // 2. About -> Skills
      .to(targetPos.current, { x: 4, y: 0, z: 2, duration: 1 })
      .to(targetLookAt.current, { x: 0, y: 0, z: -5, duration: 1 }, '<')
    // 3. Skills -> Projects
      .to(targetPos.current, { x: 0, y: 0, z: -10, duration: 1 })
      .to(targetLookAt.current, { x: 0, y: 0, z: -20, duration: 1 }, '<')
    // 4. Projects -> Resume
      .to(targetPos.current, { x: 0, y: 0, z: -28, duration: 1 })
      .to(targetLookAt.current, { x: 0, y: 0, z: -35, duration: 1 }, '<')
    // 5. Resume -> Contact
      .to(targetPos.current, { x: 0, y: -0.5, z: -38, duration: 1 })
      .to(targetLookAt.current, { x: 0, y: -1, z: -45, duration: 1 }, '<');

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  useFrame((state) => {
    state.camera.position.x = THREE.MathUtils.lerp(
      state.camera.position.x,
      targetPos.current.x + mousePos.current.x,
      0.05
    );
    state.camera.position.y = THREE.MathUtils.lerp(
      state.camera.position.y,
      targetPos.current.y - mousePos.current.y,
      0.05
    );
    state.camera.position.z = THREE.MathUtils.lerp(
      state.camera.position.z,
      targetPos.current.z,
      0.05
    );
    state.camera.lookAt(targetLookAt.current);
  });

  return null;
}

interface SceneCanvasProps {
  onOpenCV?: () => void;
}

export default function SceneCanvas({ onOpenCV }: SceneCanvasProps) {
  return (
    <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none' }}>
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        dpr={[1, 1.75]}
        gl={{ antialias: true, alpha: true }}
      >
        <color attach="background" args={['#f8fafc']} />
        <fog attach="fog" args={['#f8fafc', 8, 45]} />

        <ambientLight intensity={1.2} />
        <directionalLight position={[10, 20, 10]} intensity={1.8} color="#ffffff" />
        <pointLight position={[0, 0, 0]} intensity={3} color="#06b6d4" />

        <CameraRig />

        <Suspense fallback={null}>
          <Bird3D />
        </Suspense>

        <Clouds3D />
        <Mountain3D />
        <Sea3D />

        <Hero3D />
        <About3D />
        <Skills3D />
        <Projects3D />
        <Resume3D onOpenCV={onOpenCV} />
        <Contact3D />
      </Canvas>
    </div>
  );
}
