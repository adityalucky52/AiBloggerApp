import express from "express";
<<<<<<< HEAD
import {addBlog, deleteBlog, getBlogId, getBlogs, togglePublish}  from "../controllers/blogController.js";
=======
import addBlog  from "../controllers/blogController.js";
>>>>>>> origin/main
import upload from "../middleware/multer.js";
import auth from "../middleware/auth.js";

const router = express.Router();

router.post("/add",upload.single("image"),auth,addBlog);
<<<<<<< HEAD
router.get("/all",getBlogs);
router.get("/:blogId",getBlogId)
router.get("/delete",auth, deleteBlog);
router.post("/toggle-publish",auth, togglePublish);
=======
>>>>>>> origin/main

export default router;