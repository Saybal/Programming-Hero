import React, { useEffect } from 'react';
import error from "../../assets/images/PngItem_1622413.png"
import { Link } from 'react-router';

const ErrorPage_default = () => {

    useEffect(() => {
        document.title = "Error 404";
    }, []);
    return (
        <div className='w-screen h-screen bg-blue-100 flex flex-col justify-center items-center' >
            <div className='w-2xl p-8 border border-[#C4C4C41A] rounded-4xl shadow-sm '>
                <img className='w-2xl rounded-4xl' src={error} alt="" />
            </div>

            
                <button className='mt-[5rem] btn btn-info text-white font-bold'> <Link to="/">Go Back Home</Link> </button>
            
            
        </div>
    );
};

export default ErrorPage_default;