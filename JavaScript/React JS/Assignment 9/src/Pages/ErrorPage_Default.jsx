import React, { useEffect } from 'react';
import { Link } from 'react-router';

const ErrorPage_Default = () => {

    useEffect(() => {
        document.title = "Error 404";
    }, []);
    return (
        <div className='w-screen h-screen flex flex-col justify-center items-center' >
            <div className='w-2xl shadow-sm '>
                <img className='w-2xl rounded-4xl' src="https://i.ibb.co.com/ZzLtM34L/084aaa3c-797b-4bf1-b03c-31447572536c-removalai-preview.png" alt="" />
            </div>

            
                <button className='mt-[5rem] btn btn-success text-white font-bold'> <Link to="/">Go Back Home</Link> </button>
            
            
        </div>
    );
};

export default ErrorPage_Default;