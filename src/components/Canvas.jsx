import React from "react";
import styled from "styled-components";
import Button from "./Button";
import Contenedor from "./Container";
import InputWrapper from "./Input";
import { useState } from "react";
import GenerateSVG from "./GenerateSVG";
import { getRandomRGBA, guardarPNG, } from "./tools";
import Generate from "./Generate";


const objects = [[{
    key: 0,
    fill: "red",
    width: "100",
    height: "100",
    x: "0",
    y: "0"
},
{
    key: 1,
    fill: "yellow",
    width: "100",
    height: "100",
    x: "100",
    y: "0"
}], [{
    key: 0,
    fill: "purple",
    width: "100",
    height: "100",
    x: "0",
    y: "100"
},
{
    key: 1,
    fill: "blue",
    width: "100",
    height: "100",
    x: "100",
    y: "100"
}], [{
    key: 0,
    fill: "red",
    width: "100",
    height: "100",
    x: "0",
    y: "0"
},
{
    key: 1,
    fill: "blue",
    width: "100",
    height: "100",
    x: "100",
    y: "100"
}], [{
    key: 0,
    fill: "red",
    width: "100",
    height: "100",
    x: "0",
    y: "0"
},
{
    key: 1,
    fill: "pink",
    width: "100",
    height: "100",
    x: "100",
    y: "100"
}], [{
    key: 0,
    fill: "red",
    width: "100",
    height: "100",
    x: "0",
    y: "0"
},
{
    key: 1,
    fill: "pink",
    width: "100",
    height: "100",
    x: "100",
    y: "100"
}]];

function Canvas() {

    const [colors, setColor] = useState({ objetc: objects, name: "" });

    const setNameToSave = (newName) => {
        setColor({ ...colors, name: newName })

    };

    return (
        <Contenedor>
            <div className="flexbox-container">
                <div>
                    <svg id="elemento-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
                        <g>
                            {/*<GenerateSVG object={colors.objetc} generateColorMode={getRandomRGBA} />
                        */}
                            <Generate object={objects} generateColorMode={getRandomRGBA} />
                        </g>
                    </svg>
                </div>
            </div>

            <div>
                <form>
                    <input value={colors.name} onChange={e => setNameToSave(e.target.value)} placeholder="Save as" />
                    <Button onClick={() => guardarPNG(colors.name)} text="Download" />
                </form>
            </div>
        </Contenedor>
    );
}


export default Canvas;