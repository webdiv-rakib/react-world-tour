import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    const { name, flags, population, area, cca3 } = country;

    const [visited, setVisited] = useState(false)

    const handleVisited = () => {
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h3>Name: {name?.common}</h3>
            <img className='flag' src={flags.png} alt="" />
            <h4>Population: {population}</h4>
            <h4>Area: {area}</h4>
            <p>Code: {cca3}</p>
            <button onClick={handleVisited}>{visited?'Visited' : 'Not Visited yet'}</button>
            {visited ? "I have visited this country." : "I want to visit"}
        </div>
    );
};

export default Country;