import React from "react";
import styled from "styled-components";

const ButtonWrapper = styled.button`
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

function Button(props) {

    return <ButtonWrapper onClick={props.onClick}>{props.text}</ButtonWrapper>

}

export default Button;