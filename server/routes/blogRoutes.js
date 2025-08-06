import express from "express";
import {addBlog, addBlogComment, deleteBlog, getBlogComments, getBlogId, getBlogs, togglePublish}  from "../controllers/blogController.js";
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/add",upload.single("image"),auth,addBlog);
router.get("/all",getBlogs);
router.get("/:blogId",getBlogId)
router.get("/delete",auth, deleteBlog);
router.post("/toggle-publish",auth, togglePublish);
router.post("/add-comment", addBlogComment)
router.post("/get-comments", getBlogComments);


export default router; 