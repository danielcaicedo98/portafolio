import { OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Dragon from "./World/Dragon";
import Info from "./Info/Info";
import Figures from "./World/Firgures";
import Floor from "./World/Floor";
import Lights from "./World/Lights";
import Environments from "./World/Environments";
import WelcomeText from "./World/WelcomeText";
import { Physics } from "@react-three/rapier";
import { Bowling } from "./bowling/Bowling";

const Experience = (props) => {
  return (
    <>
      <Physics  > 
        <Environments />
        <OrbitControls makeDefault enablePan={false} />
        <ambientLight intensity={0.3} />
        <directionalLight position={[4, 6, 8]} intensity={2} />
        <Lights />
        <Floor />
        <Dragon position={[-2, -2, -2]} />
        <Figures />
        <WelcomeText />
        <Bowling />
      </Physics>
    </>
  );
};
export default Experience;
