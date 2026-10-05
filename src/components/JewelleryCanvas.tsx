import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { type ModelKey, jewelleryModels } from '../config/jewelleryModels';
import { ModelStage } from './ModelStage';
import { JewelleryLightRig } from './JewelleryLightRig';
import { CameraRig, type ChapterType } from './CameraRig';

interface JewelleryCanvasProps {
  activeModel: ModelKey;
  chapter: ChapterType;
  scrollProgress: number;
  className?: string;
  onFirstInteract?: () => void;
}

export const JewelleryCanvas: React.FC<JewelleryCanvasProps> = ({
  activeModel,
  chapter,
  scrollProgress,
  className = '',
  onFirstInteract
}) => {
  const [hasWebGL, setHasWebGL] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [parallax, setParallax] = useState({ x: 0, y: 0 });

  // Interactive Drag & Inertia state
  const dragStartRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0 });
  const modelRotationRef = useRef<[number, number, number]>([0, 0, 0]);
  const lastInteractionTimeRef = useRef(Date.now());
  const hasInteractedRef = useRef(false);

  // Check WebGL availability
  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
      }
    } catch {
      setHasWebGL(false);
    }
  }, []);

  // Desktop Pointer Parallax Handler
  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      // Normalize pointer between -1 and 1
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = (e.clientY / window.innerHeight) * 2 - 1;
      setParallax({ x: nx, y: ny });
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMouseMove);
  }, []);

  // Handle Drag Pointer Events
  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX, y: e.clientY };
    rotationVelocityRef.current = { x: 0, y: 0 };
    lastInteractionTimeRef.current = Date.now();

    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true;
      if (onFirstInteract) onFirstInteract();
    }
  }, [onFirstInteract]);

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging) return;
    const dx = e.clientX - dragStartRef.current.x;
    const dy = e.clientY - dragStartRef.current.y;
    dragStartRef.current = { x: e.clientX, y: e.clientY };

    const rotSpeed = 0.006;
    rotationVelocityRef.current = { x: dy * rotSpeed, y: dx * rotSpeed };

    modelRotationRef.current = [
      modelRotationRef.current[0] + dy * rotSpeed,
      modelRotationRef.current[1] + dx * rotSpeed,
      modelRotationRef.current[2]
    ];
    lastInteractionTimeRef.current = Date.now();
  }, [isDragging]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
    lastInteractionTimeRef.current = Date.now();
  }, []);

  // Animation Loop for Inertia and Idle Rotation
  const [currentRotation, setCurrentRotation] = useState<[number, number, number]>([0, 0, 0]);
  const scrollRotYRef = useRef(0);

  useEffect(() => {
    let animId: number;
    let lastTime = performance.now();

    const loop = (time: number) => {
      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      const idleDuration = (Date.now() - lastInteractionTimeRef.current) / 1000;

      if (isDragging) {
        // Controlled directly by pointerMove
      } else if (idleDuration < 2.0) {
        // Inertia damping
        rotationVelocityRef.current.x *= 0.94;
        rotationVelocityRef.current.y *= 0.94;
        modelRotationRef.current[0] += rotationVelocityRef.current.x;
        modelRotationRef.current[1] += rotationVelocityRef.current.y;
      } else {
        // Idle: ease back to the front-facing pose (shortest way round)
        const ease = Math.min(1, dt * 1.6);
        const wrapY = Math.atan2(Math.sin(modelRotationRef.current[1]), Math.cos(modelRotationRef.current[1]));
        const wrapX = Math.atan2(Math.sin(modelRotationRef.current[0]), Math.cos(modelRotationRef.current[0]));
        modelRotationRef.current[0] = wrapX * (1 - ease);
        modelRotationRef.current[1] = wrapY * (1 - ease);
      }

      // Gentle idle sway around the front (±~11°) so the piece still feels alive
      const t = time / 1000;
      const swayY = isDragging ? 0 : Math.sin(t * 0.5) * 0.2;
      const swayX = isDragging ? 0 : Math.sin(t * 0.35) * 0.05;

      // Parallax application (±5° Y, ±3° X)
      const parallaxX = (parallax.y * (3 * Math.PI / 180));
      const parallaxY = (parallax.x * (5 * Math.PI / 180));

      // Scroll choreography: small turns only, so the front stays visible
      let targetScrollRotY = 0;
      if (chapter === 'antiTarnish') targetScrollRotY = 0.35; // ~20 deg
      else if (chapter === 'detail') targetScrollRotY = -0.35;
      scrollRotYRef.current += (targetScrollRotY - scrollRotYRef.current) * Math.min(1, dt * 2);

      setCurrentRotation([
        modelRotationRef.current[0] + parallaxX + swayX,
        modelRotationRef.current[1] + parallaxY + scrollRotYRef.current + swayY,
        modelRotationRef.current[2]
      ]);

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, [isDragging, parallax, chapter]);

  // Determine DPR based on screen size (desktop <= 2, mobile <= 1.5)
  const dpr = typeof window !== 'undefined'
    ? window.innerWidth < 768
      ? Math.min(window.devicePixelRatio, 1.5)
      : Math.min(window.devicePixelRatio, 2)
    : 1.5;

  // Fallback for WebGL failure
  if (!hasWebGL || hasError) {
    const config = jewelleryModels[activeModel] || jewelleryModels.ring01;
    return (
      <div className={`fixed inset-0 pointer-events-none flex items-center justify-center z-10 ${className}`}>
        <div className="relative w-80 h-80 flex items-center justify-center">
          <div className="w-64 h-64 rounded-full border border-[#C9A55C]/30 flex items-center justify-center bg-radial from-[#C9A55C]/10 to-transparent">
            <span className="font-serif text-2xl text-[#E7CF91] tracking-wider uppercase text-center px-4">
              {config.name}
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`fixed inset-0 z-10 touch-none select-none cursor-grab active:cursor-grabbing ${className}`}
      data-cursor="drag"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerLeave={handlePointerUp}
      aria-label="3D Interactive Jewellery Showroom"
    >
      <Canvas
        dpr={dpr}
        gl={{
          antialias: true,
          powerPreference: 'high-performance',
          alpha: true,
          toneMappingExposure: 1.1
        }}
        camera={{ position: [0, 0, 4.8], fov: 45 }}
        onError={(e) => {
          console.error("Three.js Canvas Error:", e);
          setHasError(true);
        }}
      >
        <CameraRig
          chapter={chapter}
          pointerParallax={parallax}
          isDragging={isDragging}
        />
        <JewelleryLightRig
          chapter={chapter}
          scrollProgress={scrollProgress}
        />
        <ModelStage
          modelKey={activeModel}
          rotationOffset={currentRotation}
        />
      </Canvas>
    </div>
  );
};
