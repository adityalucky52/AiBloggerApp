import React, { useState, useEffect }   from 'react'
import {blog_data} from '../../assets/assets'
import BlogtableItem from '../../Components/admin/BlogtableItem';
const ListBlog = () => {


const [blog,setBlog] = useState([])
const fetchBlogs = async () => {
  setBlog(blog_data)
}
useEffect(() => {
  fetchBlogs()
}, [])

  

    return (
        <div className="p-6 bg-gray-50 min-h-full">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-800">All Blogs</h1>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Blog Title</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            { blog.length > 0 ? (
                                blog.map((blog, index) => (
                                    <BlogtableItem key={blog._id || index} blog={blog} fetchBlogs={fetchBlogs} index={index} />
                                ))
                            ) : (
                                <tr><td colSpan="5" className="px-6 py-4 text-center text-gray-500">No blogs found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ListBlog;