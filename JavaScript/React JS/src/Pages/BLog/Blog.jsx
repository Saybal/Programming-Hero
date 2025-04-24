import React, { useEffect, useState } from 'react';
import SingleBlog from './singleblog';


const Blog = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        document.title = "Blogs";
    }, []);
    
    useEffect(() => {
        fetch("blog.json").then(res => res.json()).then(data=>setData(data));
    },[])
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='text-center my-[2rem]'>
                <h1 className='text-4xl font-bold'>Blogs</h1>
                <p className='my-3 text-black/60 text-lg'>Let's explore some Frequently asked question thart most of our users have </p>
            </div>
            {data.map((blog) => <SingleBlog blog={blog} />)}
        </div>
    );
};

export default Blog;