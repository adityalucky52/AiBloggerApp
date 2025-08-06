import fs from "fs";
import imagekit from "../config/imagekit.js";
import Blog from "../models/Blog.js";
import Comment from "../models/Comment.js";

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
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const fileBuffer = fs.readFileSync(imageFile.path);

    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "blog/",
    });

    const optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [{ width: 1280, quality: "auto", format: "webp" }],
    });

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      isPublished,
      image: optimizedImageUrl,
    });

    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    console.error("Error in addBlog:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

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


export const addBlogComment = async (req, res) => {
  try {
    const {blog,name,content} = req.body;
    await Comment.create({
      blog,
      name,
      content
    });
    res.status(201).json({ success: true, message: "Comment added successfully" });
  } catch (error) {
    
  }
}

export const getBlogComments = async (req, res) => {
  try {
    const { blogId } = req.body;
    const comments = await Comment.find({ blog: blogId,isApproved: true }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, comments });
  } catch (error) {
    console.error("Error fetching comments:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
