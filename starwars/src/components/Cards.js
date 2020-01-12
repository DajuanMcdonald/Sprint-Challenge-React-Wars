import React from "react";
import {Card, CardText} from "reactstrap"
import styled from "styled-components";
//
const Container = styled.div`
 margin: 5%;
 border: 1px solid;
`;
//
function ReactWarCard(props) {
//     //
    return (
        <div>

     <Container>
        <Card>
             <CardText>{props.results.name}</CardText>
         </Card>
     </Container>
        </div>
)
//
}

export default ReactWarCard;