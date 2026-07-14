import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Line, Sparkles } from "@react-three/drei";
import { useMemo, useRef } from "react";
import type { Group } from "three";

function Node({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position}>
      <icosahedronGeometry args={[0.13, 0]} />
      <meshStandardMaterial
        color="#34ffb3"
        emissive="#34ffb3"
        emissiveIntensity={0.7}
        roughness={0.3}
        metalness={0.4}
      />
    </mesh>
  );
}

function NetworkCore() {
  const group = useRef<Group>(null);

  const nodePositions = useMemo(() => {
    const count = 6;
    const radius = 1.7;
    return Array.from({ length: count }, (_, i) => {
      const angle = (i / count) * Math.PI * 2;
      const y = Math.sin(i * 1.3) * 0.7;
      return [
        Math.cos(angle) * radius,
        y,
        Math.sin(angle) * radius,
      ] as [number, number, number];
    });
  }, []);

  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.15;
  });

  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[0.6, 1]} />
        <meshStandardMaterial
          color="#12294d"
          emissive="#3d6ea5"
          emissiveIntensity={0.45}
          wireframe
          roughness={0.5}
        />
      </mesh>
      <mesh>
        <icosahedronGeometry args={[0.55, 0]} />
        <meshStandardMaterial
          color="#34ffb3"
          emissive="#34ffb3"
          emissiveIntensity={0.25}
          roughness={0.2}
          metalness={0.6}
          transparent
          opacity={0.14}
        />
      </mesh>

      {nodePositions.map((pos, i) => (
        <group key={i}>
          <Node position={pos} />
          <Line
            points={[
              [0, 0, 0],
              pos,
            ]}
            color="#3d6ea5"
            transparent
            opacity={0.35}
            lineWidth={1}
          />
        </group>
      ))}
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 5.5], fov: 42 }}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.6} />
      <pointLight position={[5, 5, 5]} intensity={1.2} color="#34ffb3" />
      <pointLight position={[-5, -3, -5]} intensity={0.9} color="#3d6ea5" />
      <Float speed={1.4} rotationIntensity={0.4} floatIntensity={0.7}>
        <NetworkCore />
      </Float>
      <Sparkles
        count={35}
        scale={4.2}
        size={2}
        speed={0.3}
        color="#34ffb3"
        opacity={0.35}
      />
    </Canvas>
  );
}
