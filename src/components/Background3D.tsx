import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

// Inline inSphere
function inSphere(array: Float32Array, { radius }: { radius: number }) {
  for (let i = 0; i < array.length; i += 3) {
    const u = Math.random();
    const v = Math.random();
    const theta = 2 * Math.PI * u;
    const phi = Math.acos(2 * v - 1);
    const r = radius * Math.cbrt(Math.random());
    array[i]     = r * Math.sin(phi) * Math.cos(theta);
    array[i + 1] = r * Math.sin(phi) * Math.sin(theta);
    array[i + 2] = r * Math.cos(phi);
  }
  return array;
}

const Stars = (props: any) => {
  const ref = useRef<THREE.Points>(null);
  const sphere = useMemo(() => inSphere(new Float32Array(5000), { radius: 1.5 }), []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute("position", new THREE.BufferAttribute(sphere, 3));
    return geo;
  }, [sphere]);

  const material = useMemo(() => new THREE.PointsMaterial({
    color: "#3b82f6",
    size: 0.002,
    sizeAttenuation: true,
    depthWrite: false,
    transparent: true,
  }), []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <primitive object={new THREE.Points(geometry, material)} ref={ref} {...props} />
    </group>
  );
};

const FloatingObject = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <icosahedronGeometry args={[1, 15]} />
      <meshStandardMaterial color="#3b82f6" wireframe transparent opacity={0.3} />
    </mesh>
  );
};

const MouseController = () => {
  const { camera, mouse } = useThree();
  useFrame(() => {
    camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.05;
    camera.position.y += (mouse.y * 0.5 - camera.position.y) * 0.05;
    camera.lookAt(0, 0, -2);
  });
  return null;
};

const Background3D = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Stars />
        <MouseController />
        <group position={[0, 0, -2]}>
          <FloatingObject />
        </group>
      </Canvas>
    </div>
  );
};

export default Background3D;
