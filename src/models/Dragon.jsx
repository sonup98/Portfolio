import { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import DragonScene from '../assets/3d/demon_dragon_full_texture.glb'

const Dragon = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(DragonScene);
  const { actions } = useAnimations(animations, scene);

  useEffect(() => {
    if (actions && actions["running_skeletal.3"]) {
      if (isRotating) {
        actions["running_skeletal.3"].play();
      }
       else {
        actions["running_skeletal.3"].stop();
      }
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Dragon;

