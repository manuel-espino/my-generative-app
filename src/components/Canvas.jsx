import React from "react";
import styled from "styled-components";
import saveSvgAsPng from "save-svg-as-png";

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const random_color = () => {
    return randomNumber(0, 255);
}



const Contenedor = styled.div`
width: 100vw;
height: 100vh;
display: flex;
flex-wrap: wrap;
align-items: flex-start;
align-content: flex-start;
`;

const Celda = styled.div`
width: 10vw;
height: 10vw;  
background-color: rgba(${random_color}, ${random_color}, ${random_color}, 1);
`;


   /*<rect fill={ `rgba(${random_color()}, ${random_color()}, ${random_color()}, 1)`} width="10" height="10" x={ `${i*10}`} y="0" stylee={ `${i}`} />*/
 
const ObjetosSVG = () => {
const objetos = [...Array(10)].map((_, i) => [...Array(10)]);

 return objetos.map((fila, i) => 
 fila.map((_, j) =>     <rect  key={random_color()*i} 
    stylee={"col"+ j + "fila" +i} fill={ `rgba(${random_color()}, ${random_color()}, ${random_color()}, 1)`} 
    width="10" height="10" x={j*10} y={i*10} />
    ));
}

const guardarPNG = () => {
    saveSvgAsPng(document.getElementById("canvas"), "canvas.png");
}

function Canvas() {
    return (
        <Contenedor className="pp">
        <div className="flexbox-container">
            <div>
                <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
                    <g>
                        <ObjetosSVG/>
                    </g>
                </svg>
            </div>
        </div>
                <button onClick={guardarPNG()}>Download Image</button>

        </Contenedor>
    );
}


export default Canvas;