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
            <Info 
                nombre="Daniel Caicedo" 
                biografia="Estudiante de Sexto Semestre de Ingeniería de Sistemas de la Universidad del Valle" 
                />      
  
            <Dragon position={[-2, 0, 0]}/>
            <Text
                position={[0, 4, 0]}
                fontSize={0.3}
                color="red"
                anchorX="top"
                anchorY="top"
            >
                Los materiales se los implementé al dragon usando el método visto en clase
            </Text>
            <Figures/>


      </>
    );




}
export default Experience;