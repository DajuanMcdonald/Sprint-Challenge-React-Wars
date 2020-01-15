import React from "react";
import {Card, CardTitle} from "reactstrap";
import styled from "styled-components";
// import SetCar from "./Cars";

const Wrapper = styled.div`

display: inline-block;

justify-content: center;
flex-wrap: wrap;
height: auto;
width: 400px;
border: 1px solid;
background-color: #1222;
margin: 2%;

`;

function AddCards(props) {

    return (



       <Wrapper>

        <Card style = {{ color: 'black', backgroundColor: '#1023', margin: '5%', width: '300px', border: '1px' +
                ' solid', borderRadius: '4px', boxShadow: '2px 5px'}}>

            <CardTitle style = {{fontWeight: 'bold'}}>{props.data.name} </CardTitle>





        </Card>

        </Wrapper>

    )


}

export default AddCards;