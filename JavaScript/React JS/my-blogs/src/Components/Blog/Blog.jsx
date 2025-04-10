import React from "react";
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog, handleBookmarks, markedasRead }) => {
  
  console.log(blog.author);
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img src={blog.cover} alt="Shoes" />
        </figure>
        <div className="card-body">
          <div className="flex justify-between items-center">
            <h2>{blog.author}</h2>
            <div className="flex justify-between items-center gap-3">
              <img className="w-16 rounded-full" src={blog.author_img} alt="" />
              <button onClick={() => {
                        handleBookmarks(blog); 
                    }}
                    style={{ cursor: "pointer" }}
                    >
                    <FaBookmark size={25} />
                
              </button>
            </div>
          </div>
          <h2 className="card-title">
            {blog.title}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>
            A card component has a figure, a body part, and inside body there
            are title and actions parts
          </p>
          <div className="flex">
            {blog.hashtags.map((has) => (
              <p>{has}</p>
            ))}
          </div>
          <div className="card-actions justify-end">
            <div onClick={() => markedasRead(blog.reading_time, blog.id)} className="btn btn-success">Marked as Read</div>
            <div className="btn btn-success">Products</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
