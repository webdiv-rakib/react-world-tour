import { useEffect } from "react";
import { useState } from "react";

const Countries = () => {
    const [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
            .catch(error => console.log(error))
    }, [])
    return (
        <div>
            <h3>Countries: {countries.length}</h3>
        </div>
    );
};

export default Countries;