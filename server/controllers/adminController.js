import jwt from "jsonwebtoken";
import Blog from "../models/Blog";

export const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    // For debugging: Log received and expected credentials
    // console.log("--- Admin Login Attempt ---");
    // console.log("Received:", { email, password });
    // console.log("Expected:", {
    //   email: process.env.ADMIN_EMAIL,
    //   password: process.env.ADMIN_PASSWORD,
    // });

    if (
      email !== process.env.ADMIN_EMAIL ||
      password !== process.env.ADMIN_PASSWORD
    ) {
      return res.status(401).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ email }, process.env.JWT_SECRET);
    res.json({ success: true, token });
  } catch (error) {
    console.error("Admin login error:", error);
    res
      .status(500)
      .json({ success: false, message: "An error occurred during login." });
  }
};

const getallBlogAdmins = async (req, res) => {
  try {
    const blogs = await Blog.find({ }).sort({ createdAt: -1 });
    res.status(200).json({ success: true, blogs });
  } catch (error) {
     res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
}

export const getAllComments = async (req, res) => {
  try {
    const comments = await Comment.find({}).populate('blog').sort({ createdAt: -1 });
    res.status(200).json({ success: true, comments });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });
  }
}

export const getDashBoardData = async (req, res) => {
  try {
    const recentBlogs = await Blog.find({}).sort({ createdAt: -1 }).limit(5);
    const totalBlogs = await Blog.countDocuments();
    const totalComments = await Comment.countDocuments();
    const draftBlogs = await Blog.countDocuments({ isPublished: false });

    res.status(200).json({
      success: true,
      data: {
        recentBlogs,
        totalBlogs,
        totalComments,
        draftBlogs
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message || "Internal Server Error" });  
  }
}
