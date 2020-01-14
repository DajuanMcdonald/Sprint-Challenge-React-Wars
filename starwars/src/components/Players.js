import React, {useState, useEffect} from "react";
import styled from "styled-components";

const Container = styled.div`
border-bottom-color: lightslategray;

`;

export default function Player(props) {

    return (
        <div>
            <Container>
                <p>{props.data.name}</p>
            </Container>

        </div>
    )
}