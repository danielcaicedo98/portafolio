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
        <Info nombre="Daniel Caicedo" biografia="Estudiante de Sexto Semestre de Ingeniería de Sistemas de la Universidad del Valle" />    
        <Canvas
            camera={{ position: [2, 2, 5] }}
        >
            <Experience/>   
        </Canvas>
    </>
    
    // <Experience
    //     // title={"Portfolio - Daniel Andres"}
    //     // info={"Web 3D Developer"}
    // />
);


