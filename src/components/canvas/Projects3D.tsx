import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { ExternalLink } from 'lucide-react';
import * as THREE from 'three';

const projectsList = [
  {
    title: 'Sai Police Academy Platform',
    tag: 'Deployed in 2026',
    desc: 'Web management platform for police academy aspirants with interactive student modules and backend logic.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Node.js'],
    link: 'https://github.com/Spidy022/Sai-academy',
    pos: [-2.4, 0, -14],
    rot: [0, 0.15, 0],
  },
  {
    title: 'Interactive 3D Portfolio',
    tag: 'Web App · Live 3D',
    desc: 'Single-page developer portfolio with Three.js camera transitions, GLTF animations, and GSAP scroll timelines.',
    tech: ['React 19', 'Three.js', 'GSAP', 'Tailwind CSS'],
    link: 'https://github.com/Spidy022',
    pos: [2.4, 0, -20],
    rot: [0, -0.15, 0],
  },
  {
    title: 'Smart Learning Portal 2.0',
    tag: 'In Development',
    desc: 'Educational portal combining AI course recommendations with student analytics for VIT lab.',
    tech: ['React', 'Python', 'PostgreSQL'],
    link: 'https://github.com/Spidy022',
    pos: [-2.4, 0, -26],
    rot: [0, 0.15, 0],
  },
];

export default function Projects3D() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.rotation.y += Math.sin(delta * 0.5 + i) * 0.002;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {projectsList.map((p, i) => (
        <group
          key={i}
          position={p.pos as [number, number, number]}
          rotation={p.rot as [number, number, number]}
        >
          {/* Spatial Pearl Glass Project Card */}
          <Html
            transform
            distanceFactor={3}
            position={[0, 0, 0]}
            style={{
              width: '340px',
              padding: '24px',
              background: 'rgba(255, 255, 255, 0.88)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1.5px solid rgba(255, 255, 255, 0.9)',
              color: '#0f172a',
              boxShadow: '0 20px 45px rgba(0, 0, 0, 0.06)',
            }}
          >
            <div style={{ fontSize: '11px', color: '#0284c7', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '1px' }}>
              {p.tag}
            </div>
            <div style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.5px' }}>
              {p.title}
            </div>
            <div style={{ fontSize: '13px', color: '#475569', lineHeight: 1.5, marginBottom: '14px' }}>
              {p.desc}
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {p.tech.map((t, j) => (
                <span key={j} style={{ fontSize: '11px', background: '#e0f2fe', color: '#0284c7', padding: '3px 10px', borderRadius: '6px', border: '1px solid rgba(2, 132, 199, 0.2)', fontWeight: 600 }}>
                  {t}
                </span>
              ))}
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '13px', color: '#0f172a', textDecoration: 'none', fontWeight: 800, transition: 'opacity 0.2s' }}
            >
              View Code Repository <ExternalLink size={14} />
            </a>
          </Html>
        </group>
      ))}
    </group>
  );
}
