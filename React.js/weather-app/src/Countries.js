import { useState, useEffect } from "react";
import axios from "axios";

function Countries() {
    const [country, setCountry] = useState([]);

    const getCountries = () => {
        axios
            .get("https://restcountries.com/v2/regionalbloc/eu")
            .then((response) => {
                setCountry(response.data);
                console.log(country);
            });
    };

    return (
        <div>
            <button onClick={getCountries}> Get Countries </button>

            <form action="">
                <label>Choose a country</label>
                <select id="cars">
                    {country.map((item, index) => {
                        return <option value=''>{item.name}</option>
                    })}
                </select>
            </form>
        </div>
    );
}
export default Countries;

// check if we can use useEffect to fetch data in first place and keep the response for the select tag

// manage our data in array format, and be able to delete and filter the countries 

// after each time user click on a country and check the the weather of it, the country must filter from our array and we won't have new response, until refreshing the page/App