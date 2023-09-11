import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"


const App = () =>{
    const cameraSettings = {
        position: [0, 0, 5],
        fov: 60
    }

    return(
        <>                     
            <Canvas
                camera={cameraSettings}>            
                <Experience/>   
                <Info nombre="Daniel Caicedo" biografia="Estudiante de Sexto Semestre de Ingeniería de Sistemas de la Universidad del Valle" />
            </Canvas>
        </>    
    )
}
export default App;


