import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
    
    const [visitedcountries, setVisitedcountries] = useState([]);

    const handleCountryVisit = (country) => {

        const newCountries = [...visitedcountries, country];
        setVisitedcountries(newCountries);
        // setVisitedcountries(visitedcountries.push(country));
        // console.log('visited countries', ...visitedcountries);
    }
    
    const countries = use(countriesPromise);
    // console.log(countries);
    return (
        
        <div  className='grid grid-cols-4 gap-5'>
            <h1 className='poppins text-3xl font-semibold my-4 col-span-4'>Travelling Countries : {countries.length}</h1>
            <h1 className='poppins text-3xl font-semibold my-4 col-span-4'>Traveled so far :
                {visitedcountries.map((item, index) =>
                    (
                    <span key={index} className='text-yellow-400 font-medium'>{item}{index !== visitedcountries.length ? ", " : ""}</span> 
                    ) )}</h1>
            {
                countries.map(country => <Country handleCountryVisit={handleCountryVisit} key={country.cca3} country={country}></Country>)
            }

        </div>
    );
};

export default Countries;