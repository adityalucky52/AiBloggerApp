import { useState } from 'react';
import {blogCategories} from '../assets/assets'

const BlogPost = () => {
    const [activeCategory, setActiveCategory] = useState('All');
  return (
   
      <div className="flex justify-center sm:gap-8 gap-4 my-10 relative">
        {blogCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 text-sm rounded-full border transition ${
              activeCategory === category
                ? 'bg-blue-600 text-white border-blue-600 hover:bg-blue-700'
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      
 
  )
}

export default BlogPost