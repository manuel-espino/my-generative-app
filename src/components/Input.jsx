import React from "react";
import styled from "styled-components";

const InputWrapper = styled.input`
padding:20px 30px;
border-radius: 1000px;
border: none;
border: 1px solid blue;
color: gray;
font-size: 20px;
font-weight: light;
cursor: pointer;
margin: 10px;
`;

function Input(props) {
    return <InputWrapper placeholder={props.placeholder} onChange={props.saveAsName("eee")} />
}
export default Input;