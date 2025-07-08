import React, { use } from "react";
import { useNavigate } from "react-router-dom";



const BlogCard = ({ blog }) => {
  const { image, category, title, description,_id } = blog;
  
    const navigate = useNavigate();

  return (
    // Main card container
    <div onClick={()=>navigate(`/blog/${_id}`)} className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform transform hover:-translate-y-2 hover:shadow-2xl duration-300 ease-in-out">
      <img className="w-full h-48 object-cover" src={image} alt={title} />

      <div className="p-6">
        <span
          className={`inline-block px-3 py-1 text-sm font-semibold rounded-full mb-4 `}
        >
          {category}
        </span>

        <h3 className="text-xl font-bold text-gray-800 mb-2 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-base " dangerouslySetInnerHTML={{__html:description.slice(0,80)}}></p>
      </div>
    </div>
  );
};

export default BlogCard;
