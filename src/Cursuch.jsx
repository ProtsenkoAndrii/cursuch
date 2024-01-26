import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export const TYPE = {
  "0TPose": "0TPose",
  Listening: "Listening",
  Understanding: "Understanding",
  Idle: "Idle",
  LightOn: "LightOn",
  LightOff: "LightOff",
};

export default function Model(props) {
  const group = useRef();
  const { scene, animations } = useGLTF("/cursuch.glb", true);
  const { actions, mixer } = useAnimations(animations, group);
  useEffect(() => {
    console.log(
      "🚀 ~ file: 65546454546.jsx:25 ~ useEffect ~ type:",
      props.type
    );
    console.log(
      "🚀 ~ file: 65546454546.jsx:25 ~ useEffect ~ typePrev:",
      props.typePrev
    );
    props.typePrev && actions[props.typePrev].stop();
    actions[props.type].play();
  }, [mixer, props.type, props.typePrev]);

  return (
    <primitive
      ref={group}
      object={scene}
      dispose={null}
      position={props.position}
    />
  );
}

useGLTF.preload("/cursuch.glb");
