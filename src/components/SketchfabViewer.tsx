'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment } from '@react-three/drei';
import { Suspense, useEffect, useState, useRef } from 'react';
import * as THREE from 'three';

// Color options
const colorOptions = [
  { name: 'Indigo', value: 'white' },
  { name: 'Blue', value: '#3B82F6' },
  { name: 'Purple', value: '#8B5CF6' },
  { name: 'Red', value: '#EF4444' },
  { name: 'Green', value: '#10B981' },
  { name: 'Yellow', value: '#F59E0B' },
];

function Model({ color }: { color: string }) {
  const { scene } = useGLTF('/printer.glb');
  const modelRef = useRef<THREE.Group>(null);
  
  // Apply a color tint to all materials in the scene
  useEffect(() => {
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        if (child.material) {
          // Create a new material with the desired color
          const newMaterial = new THREE.MeshStandardMaterial({
            color: new THREE.Color(color),
            metalness: 0.7,
            roughness: 0.2,
          });
          
          // Apply the new material
          child.material = newMaterial;
        }
      }
    });
  }, [scene, color]);
  
  // Set initial rotation when the component mounts
  useEffect(() => {
    if (modelRef.current) {
      // You can set specific starting angles here (in radians)
      modelRef.current.rotation.x = Math.PI * 0.1; // tilt forward/backward
      modelRef.current.rotation.y = 0; // Start facing forward (centered)
      modelRef.current.rotation.z = 0; // roll clockwise/counterclockwise
    }
  }, []);
  
  // Animation - control how it rotates over time
  useFrame(({ clock }) => {
    if (modelRef.current) {
      // Control continuous rotation speed
      modelRef.current.rotation.y += 0.005; // horizontal rotation speed
      
      // Optional: Add subtle floating motion
      const floatOffset = Math.sin(clock.getElapsedTime() * 0.5) * 0.3;
      modelRef.current.position.y = floatOffset;
    }
  });
  
  return (
    <primitive 
      ref={modelRef}
      object={scene} 
      scale={17} 
      position={[0, 0, 0]} // Centered position
    />
  );
}

export default function SketchfabViewer() {
  const [selectedColor, setSelectedColor] = useState(colorOptions[0].value);
  
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 25], fov: 30 }}>
        <color attach="background" args={['#FF80B3']} />
        <ambientLight intensity={1.5} />
        <spotLight position={[10, 5, 10]} angle={0.15} penumbra={1} intensity={1.5} />
        <Suspense fallback={null}>
          <Model color={selectedColor} />
          <Environment preset="studio" />
        </Suspense>
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          enableRotate={true}
          autoRotate={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 1.8}
        />
      </Canvas>
      
      {/* Color selector - making it more minimal */}
      <div className="absolute bottom-8 right-8 flex gap-2 bg-white/20 p-2 rounded-lg backdrop-blur-sm">
        {colorOptions.map((color) => (
          <button
            key={color.value}
            onClick={() => setSelectedColor(color.value)}
            className={`w-6 h-6 rounded-full border-2 ${
              selectedColor === color.value ? 'border-white' : 'border-transparent'
            }`}
            style={{ backgroundColor: color.value }}
            title={color.name}
          />
        ))}
      </div>
    </div>
  );
} 