import React, {useState, useEffect} from "react";
import axios from "axios";

import "./App.scss";
import AddCards from "./components/Cards";
import SetCar from "./components/Cars";
import Player from "./components/Players";

/**
 Try to think through what state you'll need for this app before starting.
 Then build out the state properties here.
 *
 */
function App() {
    const [swCharacter, setswCharacter] = useState([]);
    const [ swVehicles, setswVehicles] = useState([]);

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

            }).catch((err) => {
            console.log(err.message)
        })

    }, []);

    // Vehicles
    useEffect(() => {
        /**
         * Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
         * side effect in a component, you want to think about which state and/or props it should
         * sync up with, if any.
         **/
        axios.get('https://swapi.co/api/vehicles/')
            .then((res) => {
                setswVehicles(res.data.results);
                console.log(swVehicles, res.data.results);

            }).catch((err) => {
            console.log(err.message)
        })

    }, []);

    return (
        <div className = "App" >
        <h1> React Wars </h1>

            <div>
                {
                    swVehicles.map((name, id) => {

                        return (

                            <SetCar data={name} key={id} />
                        )
                    })

                 },

            </div>
            <div>
                {
                    swCharacter.map((name, id) => {

                        return (

                            <AddCards data={name} key={id}/>
                        )
                    })

                },

            </div>

        </div>
    )

}


export default App;