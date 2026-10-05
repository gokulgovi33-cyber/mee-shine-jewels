import React, { useState, useEffect, useRef } from 'react';
import type { ModelKey } from '../config/jewelleryModels';
import { JewelleryModel } from './JewelleryModel';
import gsap from 'gsap';

interface ModelStageProps {
  modelKey: ModelKey;
  rotationOffset?: [number, number, number];
  onTransitionComplete?: () => void;
}

interface TransitioningModel {
  key: ModelKey;
  opacity: number;
  scaleMultiplier: number;
  isExiting: boolean;
}

export const ModelStage: React.FC<ModelStageProps> = ({
  modelKey,
  rotationOffset = [0, 0, 0],
  onTransitionComplete
}) => {
  const [models, setModels] = useState<TransitioningModel[]>([
    { key: modelKey, opacity: 1, scaleMultiplier: 1, isExiting: false }
  ]);

  const activeKeyRef = useRef(modelKey);

  useEffect(() => {
    if (modelKey === activeKeyRef.current) return;

    const oldKey = activeKeyRef.current;
    activeKeyRef.current = modelKey;

    // Setup crossfade states
    const oldItem: TransitioningModel = {
      key: oldKey,
      opacity: 1,
      scaleMultiplier: 1,
      isExiting: true
    };

    const newItem: TransitioningModel = {
      key: modelKey,
      opacity: 0,
      scaleMultiplier: 1.14,
      isExiting: false
    };

    setModels([oldItem, newItem]);

    // Animate crossfade via GSAP
    const animObj = { progress: 0 };
    gsap.to(animObj, {
      progress: 1,
      duration: 0.65,
      ease: 'power3.inOut',
      onUpdate: () => {
        const p = animObj.progress;
        setModels([
          {
            key: oldKey,
            opacity: 1 - p,
            scaleMultiplier: 1 - 0.14 * p, // 1 -> 0.86
            isExiting: true
          },
          {
            key: modelKey,
            opacity: p,
            scaleMultiplier: 1.14 - 0.14 * p, // 1.14 -> 1.0
            isExiting: false
          }
        ]);
      },
      onComplete: () => {
        setModels([
          {
            key: modelKey,
            opacity: 1,
            scaleMultiplier: 1,
            isExiting: false
          }
        ]);
        if (onTransitionComplete) onTransitionComplete();
      }
    });
  }, [modelKey, onTransitionComplete]);

  return (
    <group name="ModelStageGroup">
      {models.map((item) => (
        <JewelleryModel
          key={item.key + (item.isExiting ? '-exiting' : '-entering')}
          modelKey={item.key}
          opacity={item.opacity}
          scaleMultiplier={item.scaleMultiplier}
          rotationOffset={rotationOffset}
        />
      ))}
    </group>
  );
};
