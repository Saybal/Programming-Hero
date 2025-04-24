import React, { useEffect } from 'react';
import not_booked from "../../assets/images/no-results_7465679.png"

const Empty = () => {

    useEffect(() => {
            document.title = "Bookig Details";
    }, []);
    
    return (
        <div className='my-[10rem]'>
            <div className="w-full mt-[4rem] text-center flex flex-col justify-center items-center">
                <img className='w-[11rem] h-[11rem]' src={not_booked} alt="" />
                <h1 className='font-bold text-4xl'>You have not booked ans Appointment yet.</h1>
                <p className='text-base mt-2'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.</p>

            </div>
        </div>
    );
};

export default Empty;