const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const router = express.Router();

// Create blog
router.post("/", createBlog);

// Get all blogs
router.get("/", getBlogs);

// Get one blog
router.get("/:id", getBlogById);

// Update blog
router.put("/:id", updateBlog);

// Delete blog
router.delete("/:id", deleteBlog);

module.exports = router;
