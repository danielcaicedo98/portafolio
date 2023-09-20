import { SpotLight, useHelper } from "@react-three/drei";
import { useRef } from "react";
import { SpotLightHelper } from "three";


const Lights = () => {
    const spotLightRef = useRef();
    //useHelper(spotLightRef, SpotLightHelper);

    return(
        <>
            <SpotLight
                ref={spotLightRef}
                position={[-2, 5,-1]}
                angle={Math.PI / 3}
                intensity={100}
                color={"white"}
                penumbra={1}
                distance={9}
                castShadow
            />

        </>
    )
}

export default Lights;