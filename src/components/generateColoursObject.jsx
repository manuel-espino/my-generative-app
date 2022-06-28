import React from "react";
import { getRandomRGBA } from "./tools";
const generateColoursObject = (props) => {
    const objetos = [...Array(10)].map((_, i) => [...Array(10)]);

    return objetos.map((fila, i) =>
        fila.map((_, j) => {
            return {
                key: Math.random() * Math.random(),
                fill: getRandomRGBA(),
                width: "100", height: "100", x: j * 100, y: i * 100
            }
        }
        ));
}

export default generateColoursObject;