import { Decal, useGLTF, useTexture } from "@react-three/drei";
import React, { useEffect } from "react";
import * as THREE from "three";
import { useLoader } from "@react-three/fiber";

const Shirt = ({
  url,
  position,
  scale,
  DecalPosition,
  DecalSize,
  DecalRotation,
}) => {
  const { nodes, materials } = useGLTF(url);
  const design = useTexture("/logo.png");
  const map = useLoader(THREE.TextureLoader, "/color_map.jpg");
  const displacement = useLoader(THREE.TextureLoader, "/disp_map.png");
  const roughnesss = useLoader(THREE.TextureLoader, "/rough_map.jpg");
  const normal = useLoader(THREE.TextureLoader, "/normal_map.jpg");

  useEffect(() => {
    console.log(
      DecalPosition.x * 0.01,
      DecalPosition.y * 0.01,
      DecalPosition.z * 0.01
    );
    console.log(DecalRotation.x*0.01, DecalRotation.y*0.01, DecalRotation.z*0.01);
    console.log(DecalSize.x*0.01, DecalSize.y*0.01, DecalSize.z*0.01);
  }, [DecalPosition, DecalRotation, DecalSize]);

  const red = new THREE.MeshLambertMaterial({ color: "red" });
  return (
    <group position={position} scale={scale}>
      <mesh
        // castShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        // material-roughness={50}
        dispose={null}
      >
        <meshStandardMaterial
          map={map}
          // displacementMap={displacement}
          normalMap={normal}
          roughnessMap={roughnesss}
          side={THREE.DoubleSide}
          roughness={50}
        />
        <Decal
          position={[
            DecalPosition.x * 0.01,
            DecalPosition.y * 0.01,
            DecalPosition.z * 0.01,
          ]}
          scale={[DecalSize.x * 0.01, DecalSize.y * 0.01, DecalSize.z * 0.01]}
          depthWrite={false}
          rotation={[DecalRotation.x*0.01, DecalRotation.y *0.01, DecalRotation.z *0.01]}
          map={design}
          mapAnisotropy={16}
        />
      </mesh>
    </group>
  );
};

export default Shirt;
