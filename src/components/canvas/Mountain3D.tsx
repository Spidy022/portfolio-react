import { useMemo } from 'react';
import * as THREE from 'three';

export default function Mountain3D() {
  const mountainGeo = useMemo(() => {
    const geo = new THREE.PlaneGeometry(140, 60, 40, 20);
    geo.rotateX(-Math.PI / 2.2);

    const posAttr = geo.attributes.position;
    for (let i = 0; i < posAttr.count; i++) {
      const x = posAttr.getX(i);
      const z = posAttr.getZ(i);

      const height = (Math.sin(x * 0.1) * Math.cos(z * 0.1) * 4) +
                     (Math.sin(x * 0.2) * Math.sin(z * 0.15) * 2);

      const distCenter = Math.abs(x);
      const factor = Math.min(1, Math.max(0, (distCenter - 10) / 25));

      posAttr.setY(i, height * factor);
    }
    geo.computeVertexNormals();
    return geo;
  }, []);

  return (
    <group position={[0, -9, -50]}>
      <mesh geometry={mountainGeo}>
        <meshStandardMaterial
          color="#cbd5e1"
          emissive="#64748b"
          emissiveIntensity={0.2}
          roughness={0.9}
          wireframe
        />
      </mesh>
    </group>
  );
}
