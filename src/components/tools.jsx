import { saveSvgAsPng } from "save-svg-as-png";

export function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

export const random_color = () => {
    return randomNumber(0, 255);
}

export const getRandomRGBA = () => (`rgba(${random_color()}, ${random_color()}, ${random_color()}, 1)`);

export const guardarPNG = (fileName) => {
    saveSvgAsPng(document.getElementById("elemento-svg"), fileName + ".png");
}
