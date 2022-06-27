import React from "react";
import styled from "styled-components";



const random_color = () => {
    return 'blue';
}


const Celda = styled.div`
    width: 100px;
    height: 100px;  
    background-color: lhs(${random_color}
`;

function Canvas() {
    return (
        <div className="canvas">
            <Celda />
        </div>
    );
}

export default Canvas;