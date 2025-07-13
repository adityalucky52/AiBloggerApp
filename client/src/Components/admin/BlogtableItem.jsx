import React from "react";
import {assets} from "../../assets/assets";

const BlogtableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const date = new Date(createdAt);
  const formattedDate = date.toLocaleDateString();

  return (
    <tr className="bg-white border-b hover:bg-gray-50">
      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
        {index + 1}
      </td>
      <td className="px-6 py-4 max-w-xs truncate" title={blog.title}>
        {blog.title || "No Title"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap">{formattedDate}</td>
      <td className="px-6 py-4 whitespace-nowrap">
        <p
          className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
            blog.isPublished
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {blog.isPublished ? "Published" : "Draft"}
        </p>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <button className="border px-2 py-0.5 mt-1 rounded cursor-pointer">
          {blog.isPublished ? "Unpublish" : "Publish"}
        </button>
        <img
          src={assets.cross_icon}
          className="w-8 hover:scale-110 transition-all cursor-pointer"
          alt="Delete"
        />
      </td>
    </tr>
  );
};

export default BlogtableItem;
