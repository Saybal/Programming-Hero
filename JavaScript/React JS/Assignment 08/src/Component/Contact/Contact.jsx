import React, { useEffect } from 'react';
import error from "../../assets/images/—Pngtree—error 404 page not found_6681621.png"

const Contact = () => {

    useEffect(() => {
        document.title = "Contact";
    }, []);
    return (
        <div className='w-full h-full flex flex-col justify-center items-center'>
            <img className='w-xl' src={error} alt="" />
            <h1 className='font-bold text-4xl text-red-700'>Sorry, Contact is currently unavailable..</h1>
        </div>
    );
};

export default Contact;