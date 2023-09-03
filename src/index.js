import { createRoot} from "react-dom/client";
import "./styles.css";


const root = createRoot(document.getElementById('root'));

// root.render(
//     <h2> Portfolio - Fabian Valencia </h2>
// );

import Experience from "./Experience";
import { Canvas } from "@react-three/fiber";
import Info from "./Info";


root.render(
    <>     
            
        <Canvas
            camera={{ position: [2, 2, 5] }}
        >
            
            <Experience/>   
            <Info nombre="Daniel Caicedo" biografia="Estudiante de Sexto Semestre de Ingeniería de Sistemas de la Universidad del Valle" />
        </Canvas>
    </>
    
    // <Experience
    //     // title={"Portfolio - Daniel Andres"}
    //     // info={"Web 3D Developer"}
    // />
);


