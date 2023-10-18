import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"


const App = () =>{
    const cameraSettings = {
        position: [0, 0, 8],
        fov: 60
    }

    return(
        <>    
            <Info 
                nombre="Daniel Caicedo" 
                biografia="Estudiante de Sexto Semestre de Ingeniería de Sistemas de la Universidad del Valle" 
                />                
            <Canvas
                camera={cameraSettings}
                shadows    
                >            
                <Experience/>                   
            </Canvas>
        </>    
    )
}
export default App;


