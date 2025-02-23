import './App.css';
import world_map from './assets/world_map.png';
import {useState} from "react";
import axios from 'axios';
import addRegionColor from "./Helpers/addRegionColor.jsx";

function App() {
    const [countries, setCountries] = useState([]);
    const [countryData, setCountryData] = useState({});
    const [searchQuery, setSearchQuery] = useState('');

    async function getInfo() {
        try {
            const result = await axios.get("https://restcountries.com/v3.1/all?fields=name,flags,population,region");
            result.data.sort((a, b) => a.population - b.population);
            setCountries(result.data);
        } catch (e) {
            console.error(e);
        }
    }

    async function getCountryInfo(e) {
        e.preventDefault();
        try {
            const result = await axios.get(`https://restcountries.com/v3.1/name/${searchQuery}`);
            setCountryData(result.data[0]);
            console.log(result.data[0]);
            // setSearchQuery('')
        } catch (e) {
            console.error(e);
        }
    }

    return (
        <>
            <img src={world_map} alt="World Map"/>
            <h1>World Regions</h1>
            <section>
                {countries.length > 0 ?
                    <ul className="countries">
                        {countries.map((country) => (
                            <li key={country.name.common}>
                                <img src={country.flags.svg} alt={`Vlag van ${country.name.common}`} className="flag"/>
                                <span className={addRegionColor(country.region)}>{country.name.common}</span>
                                <p className="population">Has a population of {country.population} people</p>
                            </li>
                        ))}
                    </ul> :
                    <button type="button" onClick={getInfo}>Get all countries!</button>
                }
            </section>
            <section>
                <h2>Search country information</h2>
                <form onSubmit={getCountryInfo}>
                    <input type="text" name="query" id="query" value={searchQuery}
                           onChange={(e) => setSearchQuery(e.target.value)}/>
                    <button type="submit">Search</button>
                </form>
                <article>
                    {countryData.name ? (
                        <div>
                            <span>
                            <img src={countryData.flags.svg} alt={`Vlag van ${countryData.name.common}`}
                                 className="flag"/>
                            <p>{countryData.name.common}</p>
                        </span>
                            <p>
                                {countryData.name.common} is situated in {countryData.subregion} and the capital
                                is {countryData.capital}
                            </p>
                        </div>
                    ) : (
                        <p>Geen data beschikbaar</p>
                    )}
                </article>
            </section>
        </>
    )
}

export default App
