"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";

import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

function Background() {
  const texture = useLoader(
    THREE.TextureLoader,
    "/images/background.jpg"
  );

  texture.wrapS = THREE.RepeatWrapping;

  return <primitive attach="background" object={texture} />;
}


function Robot() {
    const { scene } = useGLTF("/models/scene.gltf");
    const meshRef = useRef<any>(null);

    const [scrollY, setScrollY] = useState(0);
    useEffect(() => {
        const scrollableElement = document.querySelector("main") || window;
        
        const handleScroll = () => {
          const scrollValue = scrollableElement === window 
            ? window.scrollY 
            : (scrollableElement as HTMLElement).scrollTop;
          console.log("Scroll detected:", scrollValue);
          setScrollY(scrollValue);
        };  

      scrollableElement.addEventListener("scroll", handleScroll);

      return () =>
        scrollableElement.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(() => {
      console.log("ScrollY in frame:", scrollY);
      meshRef.current.position.z = scrollY * 0.005-10;
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
          {/* <Background /> */}
          <ambientLight />
          <pointLight position={[10, 10, 10]} intensity={1000} />
          <pointLight position={[-10, -10, 10]} intensity={1000} />
          <Robot />
        </Canvas>
    </div>
  );
}