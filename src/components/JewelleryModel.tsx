import React, { useRef, useMemo, useEffect } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { jewelleryModels, type ModelKey } from '../config/jewelleryModels';
import { theme } from '../config/theme';

interface JewelleryModelProps {
  modelKey: ModelKey;
  opacity?: number;
  scaleMultiplier?: number;
  rotationOffset?: [number, number, number];
  useOriginalMaterials?: boolean;
  onLoaded?: () => void;
  onError?: (err: any) => void;
}

export const JewelleryModel: React.FC<JewelleryModelProps> = ({
  modelKey,
  opacity = 1,
  scaleMultiplier = 1,
  rotationOffset = [0, 0, 0],
  useOriginalMaterials = false,
  onLoaded
}) => {
  const groupRef = useRef<THREE.Group>(null);
  const config = jewelleryModels[modelKey] || jewelleryModels.ring01;

  // Load GLB model safely
  const { scene } = useGLTF(config.src);

  // Normalize model geometry into common unit box
  const normalizedScene = useMemo(() => {
    const cloned = scene.clone(true);

    // Compute bounding box & center
    const box = new THREE.Box3().setFromObject(cloned);
    const center = box.getCenter(new THREE.Vector3());
    const size = box.getSize(new THREE.Vector3());
    const maxDim = Math.max(size.x, size.y, size.z) || 1;

    // Center and scale to unit size (offset must be scaled too, or off-centre models drift)
    const unitScale = 2.4 / maxDim;
    cloned.position.copy(center).multiplyScalar(-unitScale);
    cloned.scale.set(unitScale, unitScale, unitScale);

    // Material enhancement for luxury metallic finish
    const goldMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(theme.gold),
      metalness: 0.98,
      roughness: 0.18,
      envMapIntensity: 1.4,
      transparent: opacity < 1,
      opacity: opacity
    });

    const diamondMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color(0xffffff),
      metalness: 0.05,
      roughness: 0.04,
      envMapIntensity: 2.2,
      transparent: true,
      opacity: Math.max(0.85, opacity)
    });

    cloned.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;

        if (!useOriginalMaterials) {
          const meshName = (mesh.name || '').toLowerCase();

          // Coloured stones keep their authored material (colour, transmission, IOR)
          const isColouredGem = /ruby|rubies|emerald|sapphire|amethyst|topaz|garnet/.test(meshName);
          if (isColouredGem) {
            mesh.material = (mesh.material as THREE.Material).clone();
            return;
          }

          const isGem =
            meshName.includes('diamond') ||
            meshName.includes('gem') ||
            meshName.includes('stone') ||
            meshName.includes('dropstone') ||
            meshName.includes('accent');

          if (isGem) {
            mesh.material = diamondMaterial.clone();
          } else {
            mesh.material = goldMaterial.clone();
          }
        }
      }
    });

    return cloned;
  }, [scene, useOriginalMaterials, opacity]);

  // Notify when loaded
  useEffect(() => {
    if (onLoaded) onLoaded();
  }, [onLoaded]);

  // Update materials opacity when opacity prop changes
  useEffect(() => {
    if (!normalizedScene) return;
    normalizedScene.traverse((child) => {
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        const mat = mesh.material as THREE.MeshStandardMaterial;
        if (mat) {
          mat.transparent = opacity < 1;
          mat.opacity = opacity;
        }
      }
    });
  }, [opacity, normalizedScene]);

  // Dynamic rotationOffset (drag, sway, scroll) turns the piece around screen axes;
  // the config rotation is applied inside it so each model keeps its front-facing pose
  useFrame(() => {
    if (!groupRef.current) return;
    groupRef.current.rotation.x = rotationOffset[0];
    groupRef.current.rotation.y = rotationOffset[1];
    groupRef.current.rotation.z = rotationOffset[2];
  });

  const finalScale = (config.scale || 1) * scaleMultiplier;

  return (
    <group
      ref={groupRef}
      position={config.position}
      scale={[finalScale, finalScale, finalScale]}
      dispose={null}
    >
      <group rotation={config.rotation} position={config.pivot ?? [0, 0, 0]}>
        <primitive object={normalizedScene} />
      </group>
    </group>
  );
};

// Preload models for seamless transitions
useGLTF.preload(jewelleryModels.ring01.src);
useGLTF.preload(jewelleryModels.bracelet01.src);
useGLTF.preload(jewelleryModels.chain01.src);
useGLTF.preload(jewelleryModels.earring01.src);
