import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookmarks, markedasRead}) => {

    const [blogs, setblogs] = useState([]);

    useEffect(() => { 
        fetch("blogs.json").then(res => res.json()).then(data => setblogs(data));

    }, []);
    
    console.log(blogs);
    return (
        
        <div>
            <h1> Blogs : {blogs.length}</h1>

            <div className='grid grid-cols-2'>
                {
                    blogs.map((blog) => <Blog key={blog.id} blog={blog}  handleBookmarks={handleBookmarks} markedasRead={markedasRead}></Blog>)
                }
            </div>
        </div>
        
    );
};

export default Blogs;