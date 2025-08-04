import fs from "fs";
import imagekit from "../config/imagekit.js";
import Blog from "../models/Blog.js";

const addBlog = async (req, res) => {
  try {
    const { title, subTitle, description, category, isPublished } = JSON.parse(
      req.body.data
    );
    const imageFile = req.file;

    if (!title || !description || !category || !imageFile) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const fileBuffer =  fs.readFileSync(imageFile.path);
    // Upload the image to ImageKit
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "blog/",
    });
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

    await Blog.create({
      title,
      subTitle,
      description,
      category,
      isPublished,
      image,
    });
    res.status(201).json({ message: "Blog added successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export default addBlog;
