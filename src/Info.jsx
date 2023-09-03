import React from 'react';
import "./styles.css";

function Info(props) {
  const { nombre, biografia } = props;

  return (
    <div>
      <h2 className='white-text'>Nombre: {nombre}</h2>
      <p className='white-text'>Biografía: {biografia}</p>
    </div>
  );
}

export default Info;
