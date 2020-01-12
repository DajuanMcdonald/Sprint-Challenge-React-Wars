import React, {useState, useEffect} from "react";
// import ReactWarCard from "./components/Cards";
import axios from "axios";

import "./App.css";

/**
 Try to think through what state you'll need for this app before starting.
 Then build out the state properties here.
 *
 */
function App() {
    const [swCharactr, setswCharacter] = useState([]);

    useEffect(() => {
/**
* Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
* side effect in a component, you want to think about which state and/or props it should
* sync up with, if any.
 **/
        axios.get('https://swapi.co/api/people/')
            .then((res) => {
                setswCharacter(res.data.results);
                console.log(res.data.next)
            }).catch((err) => {
            console.log(err.message)
        })

    }, []);

    const test = swCharactr.map( person => {return  person.name});

    return (
        <div className = "App" >
        <h1> React Wars </h1>
        <div>
        {test.map( next => { return <button>{next}</button>})}
        {/*<ReactWarCard/>*/}

        </div>
        </div>
)
}


export default App;