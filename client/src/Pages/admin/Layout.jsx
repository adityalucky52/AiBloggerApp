import React from 'react'
import { assets } from "../../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import SideBar from '../../Components/admin/SideBar';

const Layout = () => {

    const navigate = useNavigate();
    const logout = () => {
        
        navigate("/");
    };

  return (

    <>

    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
        
          <div className="flex items-center space-x-2">
            
            <img
              onClick={() => navigate("/")}
              src={assets.logo}
             
              className="cursor-pointer"
            />
          </div>
    
          
    
          <button
            onClick={logout}
            className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all duration-200"
          >
            logout →
          </button>
        </div>

        <div className="flex h-[calc(100vh-70px)]">
            
            <SideBar/>
            <Outlet/>

        </div>
      </>  
  )
}

export default Layout