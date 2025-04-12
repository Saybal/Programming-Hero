import React from 'react';

const Bottle = ({bottle , addcarthandler}) => {
    return (
        <div className='flex items-center rounded-xl border-2 border-l-0 border-white gap-2'>
            <img className='w-64 h-full rounded-l-xl' src={bottle.img} alt="" />
            <div className='flex flex-col w-full p-4'>
                <div className=' poppins text-xl w-full'>
                    <h3>Model: {bottle.name}</h3>
                    <p>Brand: {bottle.seller}</p>
                    <p>Price: {`${bottle.price} $`}</p>
                </div>
                
                <div className='flex justify-between w-full text-lg my-4'>
                    <h3>Stock: {bottle.stock}</h3>
                    <p>Ratings: {bottle.ratings}</p>
                </div>
                <div className='flex flex-row-reverse w-auto my-4'>
                    <button onClick={() => { addcarthandler(bottle)}} class="btn btn-active btn-accent hover:bg-green-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Bottle;