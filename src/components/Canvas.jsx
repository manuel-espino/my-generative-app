import React from "react";
import { elementToSVG } from 'dom-to-svg'
import styled from "styled-components";



// Capture the whole document
const svgDocument = elementToSVG(document.querySelector('#root'))
const svgString = new XMLSerializer().serializeToString(svgDocument)

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const random_color = () => {
    return randomNumber(0, 255);
}

const n = 100; // Or something else

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


function Canvas() {
    return (
        <Contenedor className="pp">
            {[...Array(n)].map((e, i) => <Celda />
            )
            }
            {svgString}
        </Contenedor>
    );
}


export default Canvas;