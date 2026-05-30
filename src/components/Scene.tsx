"use client";

import { Canvas } from "@react-three/fiber";

function Cube() {
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial />
    </mesh>
  );
}

export default function Scene() {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Cube />
    </Canvas>
  );
}