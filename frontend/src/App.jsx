import React, { useState } from "react";
import "./App.css";
import { Canvas } from "@react-three/fiber";
import Shirt from "./components/Shirt";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";
import Slider from "./components/Slider";

const initialPosition = {
  x: 0,
  y: 0,
  z: 0,
};
const initialSize = {
  x: 0,
  y: 0,
  z: 0,
};
const initialRotation = {
  x: 0,
  y: 0,
  z: 0,
};

function App() {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [rotation, setRotation] = useState(initialRotation);

  const handlePositionChange = (axis, value) => {
    setPosition((prevPosition) => ({
      ...prevPosition,
      [axis]: value,
    }));
  };

  const handleSizeChange = (axis, value) => {
    setSize((prevSize) => ({
      ...prevSize,
      [axis]: value,
    }));
  };

  const handleRotationChange = (axis, value) => {
    setRotation((prevRotation) => ({
      ...prevRotation,
      [axis]: value,
    }));
  };

  const handleSave = () => {
    localStorage.setItem("position", JSON.stringify(position));
    localStorage.setItem("size", JSON.stringify(size));
    localStorage.setItem("rotaion", JSON.stringify(rotation));
  };

  return (
    <div className="absolute flex  z-10 w-screen h-screen ">
      <div className=" w-2/12 p-3 select-none">
        <p className="font-bold text-lg">Adjust the Image</p>
        <Slider
          title={`Position X`}
          value={position.x}
          changeValue={(newValue) => handlePositionChange("x", newValue)}
        />
        <Slider
          title={`Position Y`}
          value={position.y}
          changeValue={(newValue) => handlePositionChange("y", newValue)}
        />
        <Slider
          title={`Position Z`}
          value={position.z}
          changeValue={(newValue) => handlePositionChange("z", newValue)}
        />
        <Slider
          title={`Size X`}
          value={size.x}
          changeValue={(newValue) => handleSizeChange("x", newValue)}
        />
        <Slider
          title={`Size Y`}
          value={size.y}
          changeValue={(newValue) => handleSizeChange("y", newValue)}
        />
        <Slider
          title={`Size Z`}
          value={size.z}
          changeValue={(newValue) => handleSizeChange("z", newValue)}
        />
        <Slider
          title={`Rotation X`}
          value={rotation.x}
          changeValue={(newValue) => handleRotationChange("x", newValue)}
        />
        <Slider
          title={`Rotation Y`}
          value={rotation.y}
          changeValue={(newValue) => handleRotationChange("y", newValue)}
        />
        <Slider
          title={`Rotation Z`}
          value={rotation.z}
          changeValue={(newValue) => handleRotationChange("z", newValue)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>

      <Canvas className="w-10/12 h-screen">
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Shirt
            url="/shirt_baked.glb"
            position={[0, 0, 0]}
            scale={6}
            DecalPosition={position}
            DecalSize={size}
            DecalRotation={rotation}
          />
        </Suspense>
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}

export default App;
