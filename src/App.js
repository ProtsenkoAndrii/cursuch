import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Cursuch, { TYPE } from "./Cursuch.jsx";
import "./styles.css";

export default function App() {
  const [action, setAction] = useState({ type: TYPE.Idle, typePrev: null });

  return (
    <>
      <div className="controls">
        <button
          onClick={() =>
            setAction({ type: TYPE["0TPose"], typePrev: TYPE.Idle })
          }
        >
          TPose
        </button>
        <button
          onClick={() =>
            setAction({ type: TYPE.LightOn, typePrev: TYPE["0TPose"] })
          }
        >
          Light On
        </button>
        <button
          onClick={() =>
            setAction({ type: TYPE.LightOff, typePrev: TYPE.LightOn })
          }
        >
          Light Off
        </button>
        <button
          onClick={() =>
            setAction({ type: TYPE.Listening, typePrev: TYPE.LightOff })
          }
        >
          Listening
        </button>
        <button
          onClick={() =>
            setAction({ type: TYPE.Understanding, typePrev: TYPE.Listening })
          }
        >
          Understanding
        </button>
        <button
          onClick={() =>
            setAction({ type: TYPE.Idle, typePrev: TYPE.Understanding })
          }
        >
          Idle
        </button>
      </div>
      <Canvas camera={{ position: [0, 1, 2] }}>
        <ambientLight />
        <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
        <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
        <pointLight intensity={2} position={[0, 3, -10]} color="white" />
        <Cursuch type={action.type} typePrev={action.typePrev} />
        <OrbitControls target={[0, 1, 0]} autoRotate />
      </Canvas>
    </>
  );
}
