import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group, Mesh } from "three";

export type PillarVariant = "dev" | "infra" | "ensino";

function DevShape() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.5;
    ref.current.rotation.x += delta * 0.2;
  });
  return (
    <mesh ref={ref}>
      <icosahedronGeometry args={[0.75, 0]} />
      <meshStandardMaterial
        color="#34ffb3"
        emissive="#34ffb3"
        emissiveIntensity={0.5}
        wireframe
      />
    </mesh>
  );
}

function InfraShape() {
  const ref = useRef<Group>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.45;
  });
  return (
    <group ref={ref}>
      {[-0.42, 0, 0.42].map((y) => (
        <mesh key={y} position={[0, y, 0]}>
          <cylinderGeometry args={[0.55, 0.55, 0.3, 24]} />
          <meshStandardMaterial
            color="#3d6ea5"
            emissive="#3d6ea5"
            emissiveIntensity={0.4}
            metalness={0.5}
            roughness={0.35}
          />
        </mesh>
      ))}
    </group>
  );
}

function EnsinoShape() {
  const ref = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.5;
    ref.current.rotation.z += delta * 0.15;
  });
  return (
    <mesh ref={ref}>
      <torusGeometry args={[0.55, 0.17, 16, 48]} />
      <meshStandardMaterial
        color="#34ffb3"
        emissive="#34ffb3"
        emissiveIntensity={0.4}
        metalness={0.35}
        roughness={0.4}
      />
    </mesh>
  );
}

export default function MiniScene3D({ variant }: { variant: PillarVariant }) {
  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3], fov: 40 }}
      gl={{ alpha: true, antialias: true }}
      style={{ pointerEvents: "none" }}
    >
      <ambientLight intensity={0.7} />
      <pointLight position={[3, 3, 3]} intensity={1.1} color="#34ffb3" />
      <pointLight position={[-3, -2, -3]} intensity={0.7} color="#3d6ea5" />
      {variant === "dev" && <DevShape />}
      {variant === "infra" && <InfraShape />}
      {variant === "ensino" && <EnsinoShape />}
    </Canvas>
  );
}
