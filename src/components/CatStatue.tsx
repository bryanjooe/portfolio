"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";

import { OrbitControls } from "@react-three/drei";


function Robot() {
    const { scene } = useGLTF("/models/scene.gltf");
    const meshRef = useRef<any>(null);
    useFrame(() => {
        meshRef.current.rotation.x += 0.0001;
        meshRef.current.rotation.y += 0.0001;
    });

    return <primitive object={scene} scale={10} position={[0, 0, -10]} ref={meshRef}/>;
}


function Cube(){
  return (
    <mesh >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="green" />
    </mesh>
  );
}

function CustomMesh() {
  return (
    <mesh>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}

export default function CatStatue() {
  return (
    <div className="fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 10] }}>

        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={1000} />
        <pointLight position={[-10, -10, 10]} intensity={1000} />
        <Robot />

        </Canvas>
    </div>
  );
}