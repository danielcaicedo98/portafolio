import { Environment } from "@react-three/drei";

const Environments = () => {
    //const spotLightRef = useRef();
    //useHelper(spotLightRef, SpotLightHelper);

    return(
        <>
           <Environment 
             files="/assets/environments/forest.exr"
             background={true}
           />

        </>
    )
}

export default Environments;