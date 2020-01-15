import React, {useState, useEffect} from "react";
import {Button} from "reactstrap";
import styled from "styled-components";


const Car = styled.p `
font-family: Comic Sans MS sans-serif;
`;

export default function SetCar(props) {
    console.log(props);


    return (
        <div>
            <Car><p> Vehicle: {props.data.name}</p></Car>

        </div>

    )
}

