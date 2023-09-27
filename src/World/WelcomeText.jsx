import { Center, Float, Text3D } from "@react-three/drei";
import Figures from "./Firgures";
import { useState } from "react";


const WelcomeText = () => {

    const [state, setState] = useState(false);

    

    const handleText = (e) =>{                
        setState(!state)
    }
    
    return(
        <>
        <Float
            speed={2} // Animation speed
            rotationIntensity={1.5} // XYZ rotation intensity
            floatIntensity={2} // Up/down float intensity
        >
            <Center position-y={2}>
                <Text3D
                    bevelEnabled
                    bevelSize={0.005}
                    bevelThickness={0.01}
                    height={0.1}
                    lineHeight={0.5}
                    letterSpacing={0.05}
                    size={0.5}                
                    font="/assets/fonts/Hip_Horay_Regular.json"
                    onClick={(e) => { handleText(e) }}
                    >
                    {`Daniel Caicedo\n \n               Click Me!`}
                    
                    <meshNormalMaterial />
                </Text3D>  
            </Center>            
        </Float>
        {state ? 

            <Text3D position={[1, 0.8, -1]}
                font="/assets/fonts/Hip_Horay_Regular.json"
                bevelEnabled
                bevelSize={0.005}
                bevelThickness={0.01}
                height={0.1}
                lineHeight={0.5}
                letterSpacing={0.05}
                size={0.2}        
                >
                {`I'm Frontend Developer with React\n
                I love Cats\n
                I love Food\n
                I like Classic music\n
                I like anime`}
                <meshNormalMaterial />
            </Text3D>    : <></>
        }
        </>
    )
}


export default WelcomeText;