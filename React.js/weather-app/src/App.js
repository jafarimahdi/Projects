import "./App.css";
// import { useState, useEffect } from "react";
// import axios from "axios";
import Jokes from "./Jokes";
import Weather from "./Weather";
import Countries from "./Countries";

function App() {
    return (
        <div className="App">
            <Jokes />
            <hr />
            <Weather/>
            <hr />
            <Countries />
        </div>
    );
}

export default App;
