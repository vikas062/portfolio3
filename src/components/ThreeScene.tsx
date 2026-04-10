import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

// Custom float animation — no drei needed
function useFloat(speed = 1, intensity = 0.1) {
  const ref = useRef<THREE.Group>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = Math.sin(state.clock.elapsedTime * speed) * intensity;
    }
  });
  return ref;
}

const AIBrain = ({ position }: { position: [number, number, number] }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const floatRef = useFloat(2, 0.08);
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.4;
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <group ref={floatRef} position={position}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[0.8, 4]} />
        <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.4} emissive="#3b82f6" emissiveIntensity={0.5} />
      </mesh>
      <mesh>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.7} />
      </mesh>
    </group>
  );
};

const FloatingFolder = ({ position }: { position: [number, number, number] }) => {
  const floatRef = useFloat(1.5, 0.1);
  return (
    <group ref={floatRef} position={position}>
      <mesh>
        <boxGeometry args={[0.8, 0.6, 0.15]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.4} emissive="#8b5cf6" emissiveIntensity={0.2} />
      </mesh>
      <mesh position={[0, 0.35, 0]}>
        <boxGeometry args={[0.4, 0.1, 0.15]} />
        <meshStandardMaterial color="#8b5cf6" transparent opacity={0.6} />
      </mesh>
    </group>
  );
};

const Document = ({ position }: { position: [number, number, number] }) => {
  const floatRef = useFloat(1.8, 0.07);
  return (
    <group ref={floatRef} position={position}>
      <mesh rotation={[0, Math.PI / 4, 0]}>
        <planeGeometry args={[0.6, 0.85]} />
        <meshStandardMaterial color="#06b6d4" transparent opacity={0.4} side={THREE.DoubleSide} emissive="#06b6d4" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};

const Envelope = ({ position }: { position: [number, number, number] }) => {
  const floatRef = useFloat(2.2, 0.09);
  return (
    <group ref={floatRef} position={position}>
      <mesh>
        <boxGeometry args={[0.8, 0.5, 0.08]} />
        <meshStandardMaterial color="#3b82f6" transparent opacity={0.4} emissive="#3b82f6" emissiveIntensity={0.2} />
      </mesh>
    </group>
  );
};

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
    <section className="section-padding relative min-h-screen flex items-center justify-center bg-black overflow-hidden border-y border-white/5">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="max-w-[1400px] w-full mx-auto relative z-10 px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1 text-left">
            <p className="text-primary font-mono text-sm tracking-[0.3em] uppercase mb-6 flex items-center gap-3">
              <span className="w-12 h-[1px] bg-primary/50"></span> Neural Nexus
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-8">
              Interactive <br />
              <span className="text-gradient">3D Multiverse</span>
            </h2>
            <p className="text-xl text-white/40 max-w-xl font-light leading-relaxed mb-10">
              A spatial interpretation of my digital footprint. Explore the intersection of Artificial Intelligence, Data Engineering, and Creative Computing through this WebGL-powered ecosystem.
            </p>
            <div className="flex flex-wrap gap-6 text-white/30 font-mono text-xs tracking-widest uppercase items-center">
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Drag to rotate</span>
              <span className="flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" /> Scroll to zoom</span>
            </div>
          </div>

          <div className="w-full lg:w-3/5 h-[500px] md:h-[700px] relative group">
            <div className="absolute inset-0 bg-blue-500/10 rounded-[3rem] blur-[100px] opacity-0 group-hover:opacity-40 transition-opacity duration-1000" />
            <div className="h-full w-full glass-card rounded-[3rem] overflow-hidden border border-white/10 relative">
              <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <color attach="background" args={['#050505']} />
                <fog attach="fog" args={['#050505', 5, 15]} />
                <ambientLight intensity={0.4} />
                <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                <pointLight position={[-10, -10, -10]} color="#8b5cf6" intensity={1} />
                <pointLight position={[0, 0, 5]} color="#3b82f6" intensity={0.5} />
                <AIBrain position={[-2.5, 1.5, 0]} />
                <FloatingFolder position={[2.5, 1.5, 0]} />
                <Document position={[-2.2, -1.8, 0]} />
                <Envelope position={[2.2, -1.8, 0]} />
                <ParticleField />
              </Canvas>
              <div className="absolute top-8 left-8 w-12 h-12 border-t-2 border-l-2 border-white/20 rounded-tl-2xl" />
              <div className="absolute bottom-8 right-8 w-12 h-12 border-b-2 border-r-2 border-white/20 rounded-br-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeScene;
