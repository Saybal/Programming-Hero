import React, { useState } from 'react';

const Country = ({ country, handleCountryVisit }) => {

    const [visited, setVisited] = useState(false);
    
    const handleClick = () => {
        // (visited === true) ? setVisited(false) : setVisited(true);  
        setVisited(!visited);  // This is more efficient than the previous one.
        handleCountryVisit(country.name.common);
    }
 
    return (
        <div className={`flex gap-5 items-center border-2 ${visited ? "border-green-500" : "border-white" }   rounded-xl p-4`}>
            <img className='w-14 h-12' src={country.flags.png} alt="" />
            <div className='poppins text-base font-medium'>
                <h3>Name: {country.name.common}</h3>
                <p>{(country.independent) ? 'Independent' : 'Dependent'}</p>
                <p>Population: {country.population}</p>
                <button onClick={handleClick} class="btn btn-outline btn-success my-3">{visited?'Visited':'Not Visited'}</button>
            </div>
        </div>
    );
};

export default Country;