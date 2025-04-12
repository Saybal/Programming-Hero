import React, { useState } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Click = ({ data , handleaddItems, handlePrice, product }) => {
    const isFavorite = product.some(item => item.id === data.id);
    const [icon, seticon] = useState(false);

    const notify = () => toast(<span className='font-semibold text-green-600 text-lg'>{data.title} <span className='text-black text-lg'>has been added to your favorites 😊</span> </span>);

    const handleClick = () => {

        if (isFavorite) return;
        
        else
        {
            seticon(true);
            handleaddItems(data);
            handlePrice(data.currentBidPrice);
            notify();
            // <Favourite data={data} />
        }    

    };
    console.log(data);
    return (
        <>
            <button onClick={() => { handleClick() }} disabled={(isFavorite || data.timeLeft <=0)} className={(!icon || !isFavorite)? "cursor-pointer" : "cursor-not-allowed"}>
                
                {(!icon || !isFavorite) ? <FaRegHeart color='red' /> : <FaHeart fill='red' />}

            </button>
            
         
        </>
        
    );
};

export default Click;