import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogtableItem from "../../Components/admin/BlogtableItem";

const categories = [
  { label: "All", value: "" },
  { label: "Tech", value: "tech" },
  { label: "Lifestyle", value: "lifestyle" },
  { label: "Travel", value: "travel" },
  // Add more categories as needed
];

const ListBlog = () => {
  const [blog, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchBlogs = async (category = "") => {
    setLoading(true);
    try {
      // If category is empty, fetch all
      const endpoint = category
        ? `/api/blog/all?category=${category}`
        : "/api/blog/all";
      const { data } = await axios.get(endpoint);
      if (data.success) {
        setBlogs(data.blogs);
      } else {
        setBlogs([]);
      }
    } catch (error) {
      setBlogs([]);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBlogs(selectedCategory);
  }, [selectedCategory]);

const handleCategoryChange = (category) => {
  console.log("Function called with:", category); // Add this line
  alert(`Selected Category: ${category}`);
  setSelectedCategory(category);
};

  return (
    <div className="p-6 bg-gray-50 min-h-full">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
      </div>

      {/* Category Selector */}
      <div className="mb-4 flex gap-2">
        {categories.map((cat) => (
          <button
            style={{ pointerEvents: 'auto', zIndex: 9999 }}

            key={cat.value}
            // onClick={() =>
            //     handleCategoryChange(cat.value)}
            // className={`px-4 py-2 rounded-lg border transition-colors font-semibold ${
            //   selectedCategory === cat.value
            //     ? "bg-blue-600 text-white"
            //     : "bg-gray-200 text-gray-800"
            // }`}
            onClick={(e) => {
  e.stopPropagation();
  handleCategoryChange(cat.value);
}}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="overflow-x-auto">
          {loading ? (
            <div className="text-center py-8 text-blue-600 font-bold">
              Loading...
            </div>
          ) : (
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Blog Title
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Date
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Status
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {blog.length > 0 ? (
                  blog
                    .filter((b) =>
                      selectedCategory === "All" || selectedCategory === ""
                        ? true
                        : b.category === selectedCategory
                    )
                    .map((blog, index) => (
                      <BlogtableItem
                        key={blog._id || index}
                        blog={blog}
                        fetchBlogs={() => fetchBlogs(selectedCategory)}
                        index={index}
                      />
                    ))
                ) : (
                  <tr>
                    <td
                      colSpan="5"
                      className="px-6 py-4 text-center text-gray-500"
                    >
                      No blogs found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListBlog;
