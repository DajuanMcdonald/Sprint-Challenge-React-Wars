import React, {useState, useEffect} from "react";
// import ReactWarCard from "./components/Cards";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
// import {CardHeader} from "@material-ui/core";
// import styled from "styled-components";

import "./App.css";

/**
 Try to think through what state you'll need for this app before starting.
 Then build out the state properties here.
 *
 */
function App() {
    const [swCharactr, setswCharacter] = useState([]);
    const [swNext, setswNext] = useState([]);

    //Characters
    useEffect(() => {
/**
* Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
* side effect in a component, you want to think about which state and/or props it should
* sync up with, if any.
 **/
        axios.get('https://swapi.co/api/people/')
            .then((res) => {
                setswCharacter(res.data.results);

                console.log('useEffect(people) 1', res.data.results.map( name => {return name}));
                console.log();
            }).catch((err) => {
            console.log(err.message)
        })

    }, []);

   // Next info
   useEffect(() => {
       axios.get('https://swapi.co/api/planets')
           .then((res) => {
               setswNext(res.data.results);
               console.log('useEffect(planets) 2', res.data.results)})
           .catch((err) => console.log(err.message))

   }, []);


    return (
        <div className = "App" >
        <h1> React Wars </h1>
            <div>

            {
            swNext.map( info => { return <Button variant="outlined" color="secondary">{info.name}</Button>})
            }
            </div>
            <Card variant="outlined">


            {
                swCharactr.map( name => { return <ul><li disabled>{name.name}</li></ul>})
            }


            </Card>

        <div>



        </div>
        </div>
)
}


export default App;