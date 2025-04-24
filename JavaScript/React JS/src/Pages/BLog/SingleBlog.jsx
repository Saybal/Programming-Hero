import React from 'react';
import { MdAddCard } from "react-icons/md";

const SingleBlog = ({blog}) => {
    return (
        <div className='py-[2rem] px-[1.5rem] my-[1rem] bg-[#1414141A] rounded-3xl'>
            <h1 className='w-full pb-2 text-2xl font-bold border-b-1 border-dashed border-black/30'>{blog.question}</h1>
            <p className='mt-2 pb-2 text-lg border-b-1 border-dashed border-black/30'>{blog.answer}</p>
            <p className='flex text-lg items-center gap-2 mt-2 pb-2'><span><MdAddCard className='font-bold text-2xl' /></span>{blog.added_date}</p>
        </div>
    );
};

export default SingleBlog;