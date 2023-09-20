import { useFrame } from "@react-three/fiber";
import { useRef } from "react";


const Figures = () => {    
    const boxRef = useRef();
    const sphereRef = useRef();
   
    useFrame((state, delta) => {
        const time = state.clock.getElapsedTime();
        const positionY = Math.sin(time);
        const positionX = Math.cos(time);        
        // Aplica la posición al objeto
        boxRef.current.position.y = positionY;
        sphereRef.current.position.x = positionX;
    });
    return(
        <>
            <mesh  ref={boxRef} position={[-4, 0, 0]} castShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhysicalMaterial color="yellow" /> 
            </mesh> 
                
            {/* <mesh  position={[0, 2, 0]}>
                <coneGeometry args={[1, 1.5, 30]} />
                <meshToonMaterial color="red" /> 
            </mesh> */}
    
            <mesh ref={sphereRef} position={[0, 0, 0]} castShadow>
                <sphereGeometry args={[1, 32, 32]} /> {/* El primer argumento es el radio, los siguientes dos son la cantidad de segmentos horizontal y vertical */}
                {
                //<meshLambertMaterial color="red" />  
                <meshToonMaterial color="red" />    
                }   
            </mesh>
            <mesh position={[3, 1, 0]}>
                <torusGeometry args={[0.6, 0.3, 10, 100]} /> {/* Los argumentos son: radio del toro, grosor del toro, segmentos radiales y segmentos tubulares */}
                <meshPhongMaterial color="green" />
            </mesh>
            <mesh position={[3, -1, 0]}>
                <coneGeometry args={[0.5, 1, 30]} /> {/* Los argumentos son: radio de la base, altura y número de segmentos */}
                <meshMatcapMaterial color="blue" />
            </mesh>      

        </>

    )

}

export default Figures;