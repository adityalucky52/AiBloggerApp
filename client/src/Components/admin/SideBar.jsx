import React from 'react'
import { NavLink } from 'react-router-dom';
import { assets } from '../../assets/assets';

const SideBar = () => {
  return (
   
      <nav className="flex flex-col space-y-1 border border-gray-300 h-full">
        <NavLink 
          to="/admin" 
          end
          className={({ isActive }) => 
            `flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 ${isActive ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-100'}`
          }
        >
          <img src={assets.home_icon} alt="Dashboard" className="w-5 h-5" />
          <span className="font-medium">Dashboard</span>
        </NavLink>
        <NavLink 
          to="/admin/addBlog"
          className={({ isActive }) => 
            `flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 ${isActive ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-100'}`
          }
        >
          <img src={assets.add_icon} alt="Add Blog" className="w-5 h-5" />
          <span className="font-medium">Add Blog</span>
        </NavLink>
        <NavLink 
          to="/admin/listBlog"
          className={({ isActive }) => 
            `flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 ${isActive ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-100'}`
          }
        >
          <img src={assets.list_icon} alt="List Blogs" className="w-5 h-5" />
          <span className="font-medium">List Blogs</span>
        </NavLink>
        <NavLink 
          to="/admin/comments"
          className={({ isActive }) => 
            `flex items-center space-x-3 p-3 rounded-md transition-colors duration-200 ${isActive ? 'bg-blue-700 text-white' : 'text-gray-700 hover:bg-blue-100'}`
          }
        >
          <img src={assets.comment_icon} alt="Comments" className="w-5 h-5" />
          <span className="font-medium">Comments</span>
        </NavLink>
      </nav>
    
  )
}

export default SideBar