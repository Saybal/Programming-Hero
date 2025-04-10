import React, { use, useEffect, useState } from 'react';
import Bottle from './Bottle';
import { addIdLocal } from '../local';

const Bottles = ({ bottlesPromise }) => {
    
    const bottles = use(bottlesPromise);

    const [bottlename, setbottleName] = useState([]);

    useEffect(() => {

        try {
            const storeCardIds = JSON.parse(localStorage.getItem('Bottle Cart')) || [];

            if (!Array.isArray(storeCardIds)) {
                console.log("storeCardIds must be an array");
                return;
            }

            const storeCards = [];
            // setstoreCardIds(storeIds);

            for (const id of storeCardIds) {
                const cardBottles = bottles.find(bottle => bottle.id === id);

                if (cardBottles)
                {
                    storeCards.push(cardBottles.name);
                }
                    
                setbottleName(storeCards);
                
            }

        } catch (error) {
            console.error("Error parsing localStorage:", error);
        }
        
        // console.log(bottlename);

        // setbottleName(storeIds);

    }, [bottles])
    

    const addcarthandler = (bottle) =>
    {
        // const name = bottle.name;

        // const newbottle = [...bottlename, name];
        // setbottleName(newbottle);

        addIdLocal(bottle.id);
        
    }

    // console.log(bottles);
    return (

        <div>
            <h3 className='poppins font-semibold text-xl my-4'>
                Add to Cart =
                {/* {localStorage.getItem('Bottle Cart') == null ? "" : localStorage.getItem('Bottle Cart')} */}
                {bottlename.map((name, index) => (
                    <span className='font-medium text-lg' key={index}>{name}{index !== bottlename.length -1 ? ", " : ""}</span>
                ))}
            </h3>
            <div className='grid grid-cols-2 gap-5'>
                {
                    bottles.map(bottle => <Bottle addcarthandler = {addcarthandler} key={bottle.id} bottle={bottle}></Bottle>)
                }
            </div>
            
        </div>
    );
};

export default Bottles;