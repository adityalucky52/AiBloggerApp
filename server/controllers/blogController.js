import fs from "fs";
import imagekit from "../config/imagekit.js";
import Blog from "../models/Blog.js";

<<<<<<< HEAD
export const addBlog = async (req, res) => {
  try {
    // console.log("req.body:", req.body);
    // console.log("req.file:", req.file);
    // if (!req.body || !req.body.blog) {
    //   return res
    //     .status(400)
    //     .json({ message: "Missing blog data in request body" });
    // }

    const blogData = JSON.parse(req.body.blog);
    const { title, subTitle, description, category, isPublished } = blogData;
=======
const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.data
    );
>>>>>>> origin/main
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({ message: "All fields are required" });
    }
<<<<<<< HEAD

    const fileBuffer = fs.readFileSync(imageFile.path);

=======
    const fileBuffer =  fs.readFileSync(imageFile.path);
    // Upload the image to ImageKit
>>>>>>> origin/main
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "blog/",
    });
<<<<<<< HEAD

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [{ width: 1280, quality: "auto", format: "webp" }],
    });
=======
    // optimize the image URL
    const optimizedImageUrl = imagekit.url({
      src: response.filePath,
      transformation: [
        {
          width: 1280,
          quality: "auto",
          format: "webp",
        },
      ],
    });
    const image = optimizedImageUrl;
>>>>>>> origin/main

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      isPublished,
<<<<<<< HEAD
      image: optimizedImageUrl,
    });

    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    console.error("Error in addBlog:", error);
=======
      image,
    });
    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
>>>>>>> origin/main
    res.status(500).json({ message: "Internal Server Error" });
  }
};

<<<<<<< HEAD
export const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ isPublished: true });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const getBlogId = async (req, res) => {
  try {
    const { blogId } = req.params
    const blog = await Blog.findById(blogId);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ success: true,  blog });
  } catch (error) {
    
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    await Blog.findById(id);
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (error) {
    console.error("Error deleting blog:", error);
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
};

export const togglePublish = async (req, res) => {
  try {
    const { id } = req.body;
    const blog = await Blog.findById(id);
    if (!blog) {
      return res.status(404).json({ success: false, message: "Blog not found" });
    }
    blog.isPublished = !blog.isPublished;
    await blog.save();
    res.json({
      success: true,
      message: "Blog publish status toggled successfully",
      data: blog,
    });
  } catch (error) {
    console.error("Error toggling publish status:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
=======
export default addBlog;
>>>>>>> origin/main
