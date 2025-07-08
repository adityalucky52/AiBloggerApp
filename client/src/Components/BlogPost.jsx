import { useState } from "react";
import { blogCategories, blog_data } from "../assets/assets";
import BlogCard from "./BlogCard";

const BlogPost = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-center sm:gap-8 gap-4 my-10 relative">
        {blogCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-1.5 text-sm rounded-full border transition ${
              activeCategory === category
                ? "bg-blue-600 text-white border-blue-600 hover:bg-blue-700"
                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="bg-gray-50 min-h-screen font-sans p-4 sm:p-8">
        <div className="max-w-7xl mx-auto">
          {/* Grid layout for the cards */}
          {/* Responsive columns: 1 on small screens, 2 on medium, 3 on large, 4 on extra-large */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Map over the blog_data and render a BlogCard for each post */}
            {blog_data
              .filter(
                (blog) =>
                  activeCategory === "All" || blog.category === activeCategory
              )
              .map((blog) => (
                <BlogCard key={blog._id} blog={blog} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
