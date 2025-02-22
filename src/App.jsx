import './App.css';
import world_map from './assets/world_map.png';
import {useState} from "react";
import axios from 'axios';

function App() {
    const [countries, setCountries] = useState([]);

    async function getInfo() {
        try {
            const result = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population")

            result.data.sort((a, b) => a.population - b.population)

            setCountries(result.data)
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <img src={world_map} alt="World Map"/>
            <h1>World Regions</h1>
            <section>
                {/* werkt nog niet*/}
                {countries ?
                    <ul className="countries">
                        {countries.map((country) => (
                            <li key={country.name.common}>
                                <img src={country.flags.svg} alt={`Vlag van ${country.name.common}`} className="flag"/>
                                <span>{country.name.common}</span>
                                <p className="population">Has a population of {country.population} people</p>
                            </li>
                        ))}
                    </ul> :
                    <button type="button" onClick={getInfo}>Get all countries!</button>
                }
            </section>
        </>
    )
}

export default App
