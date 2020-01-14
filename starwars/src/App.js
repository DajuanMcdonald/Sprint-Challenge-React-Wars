import React, {useState, useEffect} from "react";
import axios from "axios";
import { Button } from "reactstrap";
import "./App.scss";
import AddCards from "./components/Cards";

/**
 Try to think through what state you'll need for this app before starting.
 Then build out the state properties here.
 *
 */
function App() {
    const [swCharacter, setswCharacter] = useState([]);

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


                console.log('useEffect(people) 1', res.data.results.map( name =>  name));
                console.log(res.data.next);
            }).catch((err) => {
            console.log(err.message)
        })

    }, []);

    return (
        <div className = "App" >
        <h1> React Wars </h1>
            <div>




            </div>


        <div>
            <AddCards data={swCharacter}/>

        </div>
        </div>
)
}


export default App;