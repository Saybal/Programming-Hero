import React, { useEffect, useState } from 'react';

const Table = () => {

    const [auction, setauction] = useState([]);

    const fetchData = async () => {
        try {
            const response = await fetch('blog.json');
            const data = await response.json();

            if (data.length > 0) 
            {
                setauction(data);
                console.log(auction);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        
        fetchData();
        

    }, []);
    return (
        <div>
            
        </div>
    );
};

export default Table;