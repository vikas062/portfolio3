import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function useFloat(speed = 1, intensity = 0.1) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * speed) * intensity;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return ref;
}

const ProjectObject = ({ index }: { index: number }) => {
  const ref = useFloat(1.5, 0.12);
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });

  const getGeometry = () => {
    switch (index % 4) {
      case 0:
        return (
          <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.3, 128, 16]} />
            <meshStandardMaterial color="#3b82f6" metalness={0.5} roughness={0.3} />
          </mesh>
        );
      case 1:
        return (
          <mesh ref={meshRef}>
            <sphereGeometry args={[1, 64, 64]} />
            <meshStandardMaterial color="#8b5cf6" wireframe transparent opacity={0.7} />
          </mesh>
        );
      case 2:
        return (
          <mesh ref={meshRef}>
            <octahedronGeometry args={[1, 0]} />
            <meshStandardMaterial color="#06b6d4" wireframe />
          </mesh>
        );
      default:
        return (
          <mesh ref={meshRef}>
            <torusKnotGeometry args={[1, 0.2, 100, 16]} />
            <meshStandardMaterial color="#f59e0b" metalness={0.8} roughness={0.2} />
          </mesh>
        );
    }
  };

  return <group ref={ref}>{getGeometry()}</group>;
};

const Project3DVisual = ({ index }: { index: number }) => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-40 group-hover:opacity-80 transition-opacity duration-700">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} />
        <ProjectObject index={index} />
      </Canvas>
    </div>
  );
};

export default Project3DVisual;
