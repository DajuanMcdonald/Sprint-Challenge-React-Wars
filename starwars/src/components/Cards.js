import React from "react";
import {Card, CardTitle, CardText, CardLink} from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;
height: auto;
border: 1px solid;
background-color: #1222;
`;

function AddCards(props) {

    return (



        <Wrapper>

        <Card style = {{ backgroundColor: '#1023', margin: '5%', width: '300px', border: '1px solid', borderRadius: '4px', boxShadow: '2px 5px'}}>

            <CardTitle style = {{fontWeight: 'bold'}}> Player Card </CardTitle>

            <CardText>Name: {props.data.name} </CardText>

            <CardText>Height: {props.data.height} 'inches </CardText>

            <CardText>Gender: {props.data.gender} </CardText>

            <CardText>DOB: {props.data.birth_year}</CardText>

            <CardLink style = {{ textDecoration: 'none'}} href={props.data.homeworld}>Home Town: </CardLink>
        </Card>
        </Wrapper>

    )


}

export default AddCards;