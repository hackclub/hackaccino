"use client";

import { Canvas, useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
const Computer = () => {
  const myModel = useLoader(GLTFLoader, "/computer.glb");

  return (
    <Canvas style={{ height: "500px", width: "100%" }}>
      <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={5000} />
      <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={5000} />
      <primitive object={myModel.scene} />
    </Canvas>
  );
};

export default Computer;
