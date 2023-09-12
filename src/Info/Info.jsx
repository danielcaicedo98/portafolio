import React from 'react';
import "./info.css"

function Info(props) {
  const { nombre, biografia } = props;

  return (
    <div className="container-info">
      <h1>
        {nombre}
      </h1>
      <p>
        {biografia}
      </p>
    </div>
  );
}

export default Info;

