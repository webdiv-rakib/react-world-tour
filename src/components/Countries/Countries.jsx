import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country/Country";
import './Countries.css'

const Countries = () => {
    // state declaration to see total count of country
    const [countries, setCountries] = useState([]);
    // state declaration to see visited country
    const [visitedCountries, setVisitedCountries] = useState([]);
    // state declaration to see visited country flags
    const [visitedFlags, setVisitedFlags] = useState([]);
    // to fetch data
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, [])

    // event handler visited country button
    const handleVisitedCountry = country => {
        // console.log('add this to your visited country');
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries);
    }
    // event handler  visited flags button
    const handleVisitedFlags = flags => {
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags);
    }
    // to remove item from an array in a state
    // use filter to select all the elements except the one you want to remove

    

    
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited country list */}
            <div>
                <h5>Visited Countries: {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
            </div>
            {/* display visited flags */}
            <div>
                <h5>Visited Flags: {visitedFlags.length}</h5>
                <ul>
                    {
                        visitedFlags.map((flags, idx) => <img key={idx} className='flag' src={flags}></img>)
                    }
                </ul>
            </div>
            {/* display countries */}
            <div className='country-container'>
                {
                    countries.map(country => <Country
                        key={country.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        handleVisitedFlags={handleVisitedFlags}
                        country={country}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;