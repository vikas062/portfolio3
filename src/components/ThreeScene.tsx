import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Text, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

const AIBrain = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <icosahedronGeometry args={[0.6, 1]} />
          <meshStandardMaterial
            color="#3b82f6"
            wireframe
            transparent
            opacity={0.8}
          />
        </mesh>
        <Text position={[0, -1, 0]} fontSize={0.18} color="#94a3b8" anchorX="center">
          AI Brain → Projects
        </Text>
      </group>
    </Float>
  );
};

const FloatingFolder = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.8}>
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.7, 0.5, 0.1]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.7} />
      </mesh>
      <mesh position={[0, 0.25, 0]}>
        <boxGeometry args={[0.4, 0.1, 0.1]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.9} />
      </mesh>
      <Text position={[0, -0.6, 0]} fontSize={0.15} color="#94a3b8" anchorX="center">
        GitHub
      </Text>
    </group>
  </Float>
);

const Document = ({ position }: { position: [number, number, number] }) => (
  <Float speed={1.8} rotationIntensity={0.15} floatIntensity={0.6}>
    <group position={position}>
      <mesh>
        <planeGeometry args={[0.5, 0.7]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.6} side={THREE.DoubleSide} />
      </mesh>
      {[0.15, 0.05, -0.05, -0.15].map((y, i) => (
        <mesh key={i} position={[0, y, 0.01]}>
          <planeGeometry args={[0.35, 0.03]} />
          <meshStandardMaterial color="#06b6d4" transparent opacity={0.3} side={THREE.DoubleSide} />
        </mesh>
      ))}
      <Text position={[0, -0.6, 0]} fontSize={0.15} color="#94a3b8" anchorX="center">
        Resume
      </Text>
    </group>
  </Float>
);

const Envelope = ({ position }: { position: [number, number, number] }) => (
  <Float speed={2.2} rotationIntensity={0.25} floatIntensity={0.7}>
    <group position={position}>
      <mesh>
        <boxGeometry args={[0.7, 0.45, 0.05]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.5} />
      </mesh>
      <mesh position={[0, 0.12, 0.03]} rotation={[Math.PI / 6, 0, 0]}>
        <planeGeometry args={[0.7, 0.35]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.3} side={THREE.DoubleSide} />
      </mesh>
      <Text position={[0, -0.5, 0]} fontSize={0.15} color="#94a3b8" anchorX="center">
        Contact
      </Text>
    </group>
  </Float>
);

const ParticleField = () => {
  const points = useMemo(() => {
    const positions = new Float32Array(300 * 3);
    for (let i = 0; i < 300; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={300} array={points} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.02} color="#3b82f6" transparent opacity={0.5} sizeAttenuation />
    </points>
  );
};

const ThreeScene = () => {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-8">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Explore
          </p>
          <h2 className="text-3xl md:text-5xl font-bold">
            Interactive <span className="text-gradient">AI World</span>
          </h2>
          <p className="text-sm text-muted-foreground mt-3">Drag to explore • Click objects to navigate</p>
        </div>

        <div className="h-[400px] md:h-[500px] glass rounded-2xl overflow-hidden">
          <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[5, 5, 5]} intensity={0.8} color="#3b82f6" />
            <pointLight position={[-5, -5, 5]} intensity={0.4} color="#8b5cf6" />

            <AIBrain position={[-1.8, 1, 0]} />
            <FloatingFolder position={[1.8, 1, 0]} />
            <Document position={[-1.5, -1.2, 0]} />
            <Envelope position={[1.5, -1.2, 0]} />
            <ParticleField />

            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          </Canvas>
        </div>
      </div>
    </section>
  );
};

export default ThreeScene;
