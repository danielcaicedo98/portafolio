// import React from 'react';
// import "./styles.css";

// function Info(props) {
//   const { nombre, biografia } = props;

//   return (
//     <div>
//       <h2 className='white-text'>Nombre: {nombre}</h2>
//       <p className='white-text'>Biografía: {biografia}</p>
//     </div>
//   );
// }

// export default Info;
import React from 'react';
import { Text } from '@react-three/drei';

function Info(props) {
  const { nombre, biografia } = props;

  return (
    <group>
      <Text
        position={[0, 3, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="middle"
      >
        {nombre}
      </Text>

      <Text
        position={[0, 2, 0]}
        fontSize={0.3}
        color="white"
        anchorX="center"
        anchorY="top"
      >
        {biografia}
      </Text>
    </group>
  );
}

export default Info;

