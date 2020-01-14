import React from "react";
import {Card, CardTitle, CardText, CardLink} from "reactstrap";
import styled from "styled-components";

const Wrapper = styled.div`
display: flex;
//flex-direction: column;
justify-content: center;
flex-wrap: wrap;
height: auto;
border: 1px solid;
`;

function AddCards(props) {

    return (



        <Wrapper>

        <Card body style = {{ backgroundColor: '#1023', margin: '5%', width: '300px', border: '1px solid'}}>

            <CardTitle body style = {{fontWeight: 'bold'}}> Player Card </CardTitle>
            <CardText>Name: {props.data.name} </CardText>
            {
                console.log(props.data)
            }

            <CardText>Height: {props.data.height} 'inches </CardText>

            <CardText>Gender: {props.data.gender} </CardText>

            <CardText>DOB: {props.data.birth_year}</CardText>

            <CardLink body style = {{ textDecoration: 'none', color: 'red'}} href={props.data.homeworld}>Home Town: </CardLink>
        </Card>
        </Wrapper>

    )


}

export default AddCards;