import { useEffect, useState } from "react";
import axios from "axios";

function Jokes() {

    const [joke, setJoke]= useState('');

    const getJoke = () => {
        axios.get("https://api.chucknorris.io/jokes/random")
            .then((response) => {
                console.log(response);
                setJoke(response.data.value);
            });
    };
    return (
        <div>
            <h1>first Api as Joke</h1>
            <button onClick={getJoke}>Get the jokes</button>
            <p>{joke}</p>
        </div>
    );
}

export default Jokes;
