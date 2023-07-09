import react, { useState, useEffect } from "react";
import axios from "axios";

function Weather() {
    const myStyle = {
        border: "1px solid black",
        height: "50vh",
        width: "35vw",
        margin: "auto",
        marginTop: "3%",
        padding: "auto",
        textAlign: "justify",
        paddingLeft: "10%",

    };
    //   --------------

    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({
        description: "",
        temp_min: 0,
        temp_max: 0,
        sunrise: 0,
        sunset: 0,
        country: "",
    });

    const searchWeather = () => {
        axios
            .get(
                `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1979013b6099ee4882c3dd0373aa9638`
            )
            .then((response) => {
                console.log(response.data);
                setWeather({
                    description: response.data.weather[0].description,
                    temp_min: response.data.main.temp_min,
                    temp_max: response.data.main.temp_max,
                    sunrise: response.data.sys.sunrise,
                    sunset: response.data.sys.sunset,
                    country: response.data.sys.country,
                });
            });
    };

    return (
        <div>
            <h1>Second Api as weather</h1>

            <div className="getInput">
                <input type="text" onChange={(e) => setCity(e.target.value)} />

                <button onClick={searchWeather}>search</button>
            </div>

            <div style={myStyle}>
                <h2>{city}</h2>
                <h5>Description: {weather.description}</h5>
                <h5>Temperature-Max: {weather.temp_max}</h5>
                <h5>Temperature-Min: {weather.temp_min}</h5>
                <h5>Sunrise: {weather.sunrise}</h5>
                <h5>Sunset: {weather.sunset}</h5>
                <h5>Country: {weather.country}</h5>
            </div>
        </div>
    );
}
export default Weather;
