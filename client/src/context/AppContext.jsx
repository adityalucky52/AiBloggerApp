
import { useContext } from "react";
import { createContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { useEffect } from "react";


// Set the base URL for axios requests
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL || 'http://localhost:3000';



const AppContext = React.createContext();


export const AppProvider = ({ children }) => {
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const[blogs, setBlogs] = useState([]);
    const [input, setInput] = useState("");

    const fetchBlogs = async ()=>{
      try {
        const {data} = await axios.get('/api/blog/all')
        data.success ? setBlogs(data.blogs) : toast.error(data.message)
      } catch (error) {
        toast.error(error.message);
      }
    }

    useEffect(() => {
      fetchBlogs();
      const token = localStorage.getItem('token');
      if (token) {
        setToken(token);
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      } 
    }, []);

    const value = {
        axios,navigate,
        token, setToken,
        blogs, setBlogs,
        input, setInput
    }
  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};


export const useAppContext = () => {
  return useContext(AppContext); //UNDERSTAMD THIS
};