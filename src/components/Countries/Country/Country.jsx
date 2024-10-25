import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handleVisitedCountry, handleVisitedFlags }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }

    // const passWithParams = () => handleVisitedCountry(country);

    // console.log(handleVisitedCountry);
    return (
        <div className={`country ${visited && 'visited'}`}>
            <h3 style={{ color: visited ? 'purple' : 'white' }}>Name: {name?.common}</h3>
            <img className='flag' src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <p>Code: {cca3}</p>
            <br />
            <button onClick={() => handleVisitedCountry(country)}>Mark as visited</button>
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Flags</button>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Not Visited yet'}</button>
            {visited ? "I have visited this country." : "I want to visit"}
            <hr />
            <CountryDetail
                country={country}
                handleVisitedCountry={handleVisitedCountry}
                handleVisitedFlags={handleVisitedFlags}
            ></CountryDetail>
        </div>
    );
};

export default Country;