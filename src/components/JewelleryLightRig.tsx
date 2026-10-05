import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import * as THREE from 'three';

interface JewelleryLightRigProps {
  scrollProgress?: number; // 0 to 1
  chapter?: 'hero' | 'antiTarnish' | 'detail' | 'selector' | 'collection';
}

export const JewelleryLightRig: React.FC<JewelleryLightRigProps> = ({
  scrollProgress = 0,
  chapter = 'hero'
}) => {
  const sweepLightRef = useRef<THREE.PointLight>(null);
  const keyLightRef = useRef<THREE.DirectionalLight>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Chapter 1 micro material animation: narrow sweep light moves left -> right
    if (sweepLightRef.current) {
      if (chapter === 'antiTarnish' || (scrollProgress >= 0.15 && scrollProgress <= 0.45)) {
        // Active metallic sweep
        const sweepX = -3 + ((scrollProgress - 0.15) / 0.3) * 6;
        sweepLightRef.current.position.set(sweepX, 1.5, 2.5);
        sweepLightRef.current.intensity = 8.0;
      } else {
        // Subtle ambient shimmer
        sweepLightRef.current.position.x = Math.sin(time * 0.5) * 2;
        sweepLightRef.current.position.y = 1.2 + Math.cos(time * 0.4) * 0.4;
        sweepLightRef.current.intensity = 3.5;
      }
    }

    // Dynamic key light accent
    if (keyLightRef.current) {
      if (chapter === 'detail') {
        keyLightRef.current.intensity = 3.5;
        keyLightRef.current.position.set(1.5, 2.5, 3.5);
      } else {
        keyLightRef.current.intensity = 2.4;
        keyLightRef.current.position.set(2.5, 3.5, 3.5);
      }
    }
  });

  return (
    <>
      {/* Studio Environment Map for PBR reflections */}
      <Environment preset="studio" environmentIntensity={1.3} />

      {/* Ambient subtle fill - daylight studio */}
      <ambientLight intensity={0.9} color="#FFFFFF" />

      {/* Main Warm-Neutral Key Light */}
      <directionalLight
        ref={keyLightRef}
        position={[2.5, 3.5, 3.5]}
        intensity={2.6}
        color="#FFF9F0"
        castShadow
        shadow-mapSize={[1024, 1024]}
      />

      {/* Warm Champagne Gold Accent Light */}
      <spotLight
        position={[-3, 2, 2]}
        intensity={3.4}
        color="#E7CF91"
        angle={0.6}
        penumbra={0.8}
      />

      {/* Extremely Subtle Warm Rim Light */}
      <directionalLight
        position={[0, -2, -3]}
        intensity={0.8}
        color="#EDE8E1"
      />

      {/* Moving Metallic Highlight Sweep Light */}
      <pointLight
        ref={sweepLightRef}
        position={[-2, 1.5, 2.5]}
        intensity={3.8}
        color="#FFF2CC"
        distance={8}
      />
    </>
  );
};
