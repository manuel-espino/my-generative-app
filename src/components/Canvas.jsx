import React from "react";
import styled from "styled-components";
import {saveSvgAsPng} from "save-svg-as-png";

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
align-items: center;
align-content: flex-start;
justify-content: center;
`;

const Celda = styled.div`
width: 10vw;
height: 10vw;  
background-color: rgba(${random_color}, ${random_color}, ${random_color}, 1);
`;

const BotonDescargar = styled.button`
background-color: blue;
padding:20px 30px;
border-radius: 1000px;
border: none;
color: white;
font-size: 20px;
font-weight: bold;
cursor: pointer;
margin: 10px;

`;
   /*<rect fill={ `rgba(${random_color()}, ${random_color()}, ${random_color()}, 1)`} width="10" height="10" x={ `${i*10}`} y="0" stylee={ `${i}`} />*/
 
const ObjetosSVG = () => {
const objetos = [...Array(10)].map((_, i) => [...Array(10)]);

 return objetos.map((fila, i) => 
 fila.map((_, j) =>     <rect  key={random_color()*random_color()} 
    stylee={"col"+ j + "fila" +i} fill={ `rgba(${random_color()}, ${random_color()}, ${random_color()}, 1)`} 
    width="100" height="100" x={j*100} y={i*100} />
    ));
}

const guardarPNG = () => {
    saveSvgAsPng(document.getElementById("elemento-svg"), "canvas.png");
}

function Canvas() {
    return (
        <Contenedor className="pp">
        <div className="flexbox-container">
            <div>
                <svg id="elemento-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                    <g>
                        <ObjetosSVG/>
                    </g>
                </svg>
            </div>
        </div>

<BotonDescargar onClick={guardarPNG}>Download</BotonDescargar>
        </Contenedor>
    );
}


export default Canvas;