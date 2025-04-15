import React, { useEffect, useState } from 'react';
import Body from './body';


const Table = ({handleaddItems , handlePrice, product}) => {

    const [auction, setauction] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch("blog.json");
            const data = await response.json();

            if (data.length > 0) 
            {
                setauction(data);
                
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        
        fetchData();
       
    }, []);
    // console.log(auction.length);

    return (
        <div>
            <table className='rounded-3xl bg-white'>
                <thead>
                    <tr className='p-[2rem]'>
                        <th className='p-8 text-left text-lg'>Items</th>
                        <th className='p-8 text-left text-lg'>Current Bid</th>
                        <th className='p-8 text-left text-lg'>Time Left</th>
                        <th className='p-8 text-left text-lg'>Bid Now</th>
                    </tr>
                </thead>
                <tbody>
                    <Body body={auction} handleaddItems={handleaddItems} handlePrice={handlePrice} product={product}  />
                </tbody>
            </table>
        </div>
    );
};

export default Table;