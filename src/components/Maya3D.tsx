import { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

// 3D Maya Mascot Component
function MayaSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.1;
      
      if (hovered && !clicked) {
        meshRef.current.scale.setScalar(1.1);
      } else {
        meshRef.current.scale.setScalar(1);
      }
    }
  });

  const messages = [
    "Great job learning!",
    "Keep it up!",
    "You're amazing!",
    "Ready for the next lesson?",
    "Excellence!"
  ];

  return (
    <group>
      <Sphere
        ref={meshRef}
        args={[0.8, 32, 32]}
        position={[0, 0, 0]}
        onClick={() => setClicked(!clicked)}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <meshStandardMaterial
          color={hovered ? "#00d4aa" : "#00b4d8"}
          emissive={hovered ? "#005577" : "#003355"}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
      
      {clicked && (
        <Text
          position={[0, 1.5, 0]}
          fontSize={0.3}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {messages[Math.floor(Math.random() * messages.length)]}
        </Text>
      )}
      
      {/* Maya's eyes */}
      <Sphere args={[0.08, 16, 16]} position={[-0.25, 0.15, 0.7]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      <Sphere args={[0.08, 16, 16]} position={[0.25, 0.15, 0.7]}>
        <meshStandardMaterial color="#ffffff" />
      </Sphere>
      
      {/* Maya's pupils */}
      <Sphere args={[0.04, 16, 16]} position={[-0.25, 0.15, 0.75]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
      <Sphere args={[0.04, 16, 16]} position={[0.25, 0.15, 0.75]}>
        <meshStandardMaterial color="#000000" />
      </Sphere>
    </group>
  );
}

interface Maya3DProps {
  className?: string;
  size?: 'small' | 'medium' | 'large';
}

export const Maya3D = ({ className = "", size = 'medium' }: Maya3DProps) => {
  const sizeMap = {
    small: 'h-32 w-32',
    medium: 'h-48 w-48',
    large: 'h-64 w-64'
  };

  return (
    <div className={`${sizeMap[size]} ${className} maya-floating`}>
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff6b6b" />
        <MayaSphere />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </div>
  );
};