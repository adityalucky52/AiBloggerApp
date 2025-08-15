import React, { use } from "react";
import { assets } from "../assets/assets";
// import { useNavigate } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
const NavBar = () => {

 const {navigate,token} = useAppContext();
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
    
      <div className="flex items-center space-x-2">
        
        <img
          onClick={() => navigate("/")}
          src={assets.logo}
          alt=""
          className="cursor-pointer"
        />
      </div>

      {/* Login Button */}

      <button
        onClick={() => navigate("/admin")}
        className="bg-indigo-600 text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-all duration-200"
      >
        {token ? "Dashboard" : "login →"}
      </button>
    </div>
  );
};

export default NavBar;
