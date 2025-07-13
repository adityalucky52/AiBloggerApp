import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../assets/assets"; // Assuming this path is correct
import Quill from "quill";

const AddBlog = () => {

  const editorRef = useRef(null);
  const quillRef = useRef(null);


  const [image, setImage] = useState(null); // Use null for initial state of no file
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const [description, setDescription] = useState(""); // Added description state
  const [category, setCategory] = useState("Startup");
  const [isPublished, setIsPublished] = useState(false);

  const generateContent = async () => {
    // Your AI content generation logic will go here
    console.log("Generating AI content...");
    setDescription("This is AI-generated content for the blog post.");
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    
  };

  useEffect(() => {
    if(!quillRef.current && editorRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: 'snow'
      });
    }
  }, []);


  return (
    <form
      onSubmit={onSubmitHandler}
      className="p-5 sm:p-8 bg-white min-h-full text-gray-800"
    >
      {/* Image Upload Section */}
      <div className="flex flex-col gap-3">
        <p className="text-base font-semibold text-gray-600">
          Upload Thumbnail
        </p>
        <label htmlFor="image">
          {/* Display uploaded image preview or a default upload icon */}
          <img
            src={image ? URL.createObjectURL(image) : assets.upload_area}
            alt="Upload area"
            className="mt-1 h-32 w-48 object-cover rounded-md cursor-pointer border border-dashed border-gray-400 p-1"
          />
        </label>
        <input
          onChange={(e) => setImage(e.target.files[0])}
          type="file"
          id="image"
          hidden
          required
        />
      </div>

      {/* Blog Title Section */}
      <div className="flex flex-col gap-2 w-full max-w-lg">
        <label
          htmlFor="title"
          className="text-base font-semibold text-gray-600"
        >
          Blog Title
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter a compelling title"
          required
        />
      </div>

      {/* Sub Title Section */}
      <div className="flex flex-col gap-2 w-full max-w-lg">
        <label
          htmlFor="subTitle"
          className="text-base font-semibold text-gray-600"
        >
          Sub Title
        </label>
        <input
          id="subTitle"
          type="text"
          value={subTitle} // Corrected from `title` to `subTitle`
          onChange={(e) => setSubTitle(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
          placeholder="Enter a brief sub-title"
          required
        />
      </div>

      {/* Blog Category Section */}
      <div className="flex flex-col gap-2 w-full max-w-xs">
        <label
          htmlFor="category"
          className="text-base font-semibold text-gray-600"
        >
          Blog Category
        </label>
        <select
          id="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        >
          <option value="Startup">Startup</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
        </select>
      </div>

      {/* Blog Description Section */}
      <div className="flex flex-col gap-2 w-full max-w-2xl">
        <div className="flex justify-between items-center">
          <label
            htmlFor="description"
            className="text-base font-semibold text-gray-600"
          >
            Blog Description
          </label>
          <div className="max-w-lg h-74 pb-16 ">

          <div ref={editorRef}></div>
          <button
            type="button"
            onClick={generateContent}
            className="px-4 py-1.5 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg shadow-md hover:from-purple-600 hover:to-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
            >
            ✨ Generate with AI
          </button>
        </div>
      </div>
            </div>
    </form>
  );
};

export default AddBlog;
