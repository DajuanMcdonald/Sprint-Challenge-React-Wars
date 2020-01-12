import React, {useState, useEffect} from "react";
import { CardText, CardTitle, CardBody, Card, CardHeader, CardFooter } from "reactstrap";

function StarWarCard() {


return (
    <div>
        <Card>
            <CardTitle>{}</CardTitle>

            <CardBody>
                <CardHeader/>
                    <CardText/>
                <CardFooter/>
            </CardBody>
        </Card>
    </div>
    )
}

export default StarWarCard;
