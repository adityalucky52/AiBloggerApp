import React from 'react'
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';  
import {blog_data,assets,comments_data} from '../assets/assets';
import Navbar from '../Components/Navbar';
import Moment from 'moment';
import Footer from '../Components/Footer';
const Blog = () => {

  const {id} = useParams();
  const[data,setData] = useState(null);
  const [comments, setComments] = useState([])

  const[name,setName] = useState("");
  const[comment,setComment] = useState("");
  const fetchBlog = async () => {
    const data = blog_data.find((item) => item.id === id);
    setData(data);
  };
  const fetchComments = async () => {
    setComments(comments_data)};

  const submitHandler = (e) => {
    e.preventDefault();
  }
  
  useEffect(() => {
    fetchBlog();
    fetchComments();
  }, []);


  return data ? (
    <>
      <div className="font-sans text-gray-800 bg-white">
        <Navbar />

        {/* Hero */}
        <section className="text-center py-10 px-4 bg-gradient-to-b from-white to-purple-50">
          <p className="text-xs text-purple-600 font-medium">Published on April 21st 2025</p>
          <h1 className="text-3xl md:text-4xl font-bold leading-snug mt-3">
            A detailed step by step guide to<br />manage your lifestyle
          </h1>
          <p className="mt-3 text-gray-600 text-sm">A Simple Step-by-Step Guide to Managing Your Lifestyle.</p>
          <p className="mt-2 text-blue-700 text-sm underline">Michael Brown</p>

          {/* Image */}
          <div className="flex justify-center mt-6">
            <img
              className="rounded-lg max-w-full w-[90%] md:w-[700px] shadow"
              src="https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg"
              alt="Blog visual"
            />
          </div>
        </section>

        {/* Blog Body */}
        <section className="max-w-3xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold mb-6">A Simple Step-by-Step Guide to Managing Your Lifestyle</h2>

          <div className="space-y-6 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: data.description }}>
            
          </div>
        </section>

        {/* Comments, Comment Form, Social Share */}
        <section className="max-w-3xl mx-auto px-4 pb-20">
          <h3 className="text-sm font-semibold mb-4">Comments ({comments.length})</h3>
          <div className="space-y-4 text-sm">
            {comments.map((item,index) => (
              <div key={index} className="border p-3 rounded relative">
                <div>
                  <img src={assets.user_icon} alt="" className="w-6 h-6 inline-block " />
                  <p className='font-medium'>{item.name}</p>

                </div>
                <p className="text-gray-600">{item.content}</p>
                <div className="absolute right-4 flex items-center gap-2 text-xs bottom-3 ">{Moment(item.createdAt).fromNow( )}</div>
              </div>
            ))}
          </div>

          {/* Comment Form */}
          <form  onSubmit={submitHandler}className="mt-8">
            <h4 className="text-sm font-semibold mb-2">Add your comment</h4>
            <input
              // value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="Name"
              className="w-full border px-3 py-2 rounded mb-2 text-sm"
            />
            <textarea
              // value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Comment"
              rows="4"
              className="w-full border px-3 py-2 rounded text-sm"
            />
            <button className="mt-2 bg-blue-600 text-white px-4 py-2 rounded text-sm">Submit</button>
          </form>

          {/* Social Share */}
          <div className="mt-8 text-xs text-gray-500">Share this article on social media</div>
          <div className="flex space-x-4 mt-2">
            <span className="cursor-pointer">🌐</span>
            <span className="cursor-pointer">👍</span>
            <span className="cursor-pointer">🐦</span>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  ) : (
    <div>Loading...</div>
  );
}

export default Blog