import { OrbitControls, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import Dragon from "./World/Dragon";
import Info from "./Info/Info";
import Figures from "./World/Firgures";

const Experience = (props) => {

    return (
        <>    
        
            <OrbitControls 
                makeDefault
                enablePan = {false}
                />
            <ambientLight intensity={0.5} />
            <directionalLight position={[4, 6, 8]} intensity={2} />
                 
  
            <Dragon position={[-2, 0, 0]}/>            
            <Figures/>


      </>
    );




}
export default Experience;