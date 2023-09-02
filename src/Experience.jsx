import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";

const Experience = (props) => {

    const boxRef = useRef();
    useFrame((state, delta) => {
        boxRef.current.rotation.x += 1 * delta
    });
    return (
        <>    
    <OrbitControls 
        makeDefault
        enablePan = {false}
        />
    <ambientLight intensity={0.5} />
    <directionalLight position={[4, 6, 8]} intensity={2} />
    <mesh ref={boxRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" /> 
      </mesh>

      </>
    );

   


}
export default Experience;