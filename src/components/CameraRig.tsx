import React, { useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

export type ChapterType = 'hero' | 'antiTarnish' | 'detail' | 'selector' | 'collection';

interface CameraRigProps {
  chapter: ChapterType;
  pointerParallax?: { x: number; y: number };
  isDragging?: boolean;
}

const CHAPTER_CAMERAS: Record<ChapterType, { pos: [number, number, number]; lookAt: [number, number, number] }> = {
  hero: {
    pos: [0, 0, 4.8],
    lookAt: [0, 0, 0]
  },
  antiTarnish: {
    pos: [-0.65, 0.15, 4.1],
    lookAt: [0.35, 0, 0]
  },
  detail: {
    pos: [0.35, 0.15, 2.8],
    lookAt: [-0.15, 0.2, 0]
  },
  selector: {
    pos: [0, 0, 4.9],
    lookAt: [0, 0, 0]
  },
  collection: {
    pos: [0, 0, 5.8],
    lookAt: [0, 0, 0]
  }
};

export const CameraRig: React.FC<CameraRigProps> = ({
  chapter,
  pointerParallax = { x: 0, y: 0 },
  isDragging = false
}) => {
  const { camera } = useThree();
  const currentPosRef = useRef(new THREE.Vector3(0, 0, 4.8));
  const currentLookAtRef = useRef(new THREE.Vector3(0, 0, 0));

  useFrame((_, delta) => {
    const targetConfig = CHAPTER_CAMERAS[chapter] || CHAPTER_CAMERAS.hero;

    // Subtle pointer parallax when not dragging
    const px = isDragging ? 0 : pointerParallax.x * 0.2;
    const py = isDragging ? 0 : pointerParallax.y * 0.15;

    const targetPos = new THREE.Vector3(
      targetConfig.pos[0] + px,
      targetConfig.pos[1] + py,
      targetConfig.pos[2]
    );

    const targetLookAt = new THREE.Vector3(...targetConfig.lookAt);

    // Smooth damp interpolation (never instant jump)
    const factor = Math.min(delta * 3.5, 0.15);
    currentPosRef.current.lerp(targetPos, factor);
    currentLookAtRef.current.lerp(targetLookAt, factor);

    camera.position.copy(currentPosRef.current);
    camera.lookAt(currentLookAtRef.current);
  });

  return null;
};
