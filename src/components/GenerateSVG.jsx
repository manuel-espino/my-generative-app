import React from "react";




const GenerateSVG = (props) => {
    const objetos = [...Array(10)].map((_, i) => [...Array(10)]);

    return objetos.map((fila, i) =>
        fila.map((_, j) => <rect key={Math.random() * Math.random()}
            fill={props.generateColorMode()} width="100" height="100" x={j * 100} y={i * 100} />
        ));
}

export default GenerateSVG;