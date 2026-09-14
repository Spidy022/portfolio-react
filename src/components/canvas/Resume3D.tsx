import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Download, FileText } from 'lucide-react';
import * as THREE from 'three';

interface Resume3DProps {
  onOpenCV?: () => void;
}

export default function Resume3D({ onOpenCV }: Resume3DProps) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((_, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += Math.sin(delta * 0.4) * 0.005;
    }
  });

  return (
    <group position={[0, 0, -35]} ref={groupRef}>
      {/* 3D Spatial Pearl Glass Resume Document Card */}
      <Html
        transform
        distanceFactor={typeof window !== 'undefined' && window.innerWidth < 768 ? 4.2 : 3.2}
        position={[0, 0, 0]}
        style={{
          width: '320px',
          padding: '24px',
          background: 'rgba(255, 255, 255, 0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderRadius: '24px',
          border: '1.5px solid rgba(255, 255, 255, 0.9)',
          color: '#0f172a',
          boxShadow: '0 20px 45px rgba(0, 0, 0, 0.06)',
          textAlign: 'center',
        }}
      >
        <div style={{ display: 'inline-flex', padding: '12px', background: 'rgba(6, 182, 212, 0.1)', borderRadius: '50%', marginBottom: '12px', color: '#06b6d4' }}>
          <FileText size={24} />
        </div>
        <div style={{ fontSize: '11px', color: '#06b6d4', fontWeight: 700, textTransform: 'uppercase', marginBottom: '4px', letterSpacing: '1px' }}>
          Executive Resume
        </div>
        <div style={{ fontSize: '20px', fontWeight: 800, color: '#0f172a', marginBottom: '6px' }}>
          Thiru Dev
        </div>
        <div style={{ fontSize: '12px', color: '#475569', lineHeight: 1.5, marginBottom: '16px' }}>
          Integrated M.Tech Software Engineering · VIT Vellore (2023 - 2028)
        </div>
        <button
          onClick={onOpenCV}
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#0f172a',
            color: '#ffffff',
            borderRadius: '999px',
            fontWeight: 700,
            fontSize: '13px',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 10px 25px rgba(15, 23, 42, 0.15)',
          }}
        >
          <Download size={14} /> Open &amp; Print Full CV
        </button>
      </Html>

      <spotLight position={[0, 4, -30]} target-position={[0, 0, -35]} intensity={3} color="#06b6d4" />
    </group>
  );
}
