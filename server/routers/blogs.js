const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogs");
//CRUD format

//CREATE A BLOG
router.post("/", blogController.createBlog);

// READ A BLOG
router.get("/", blogController.getBlogs);

// READ A SINGLE BLOG
router.get("/:id", blogController.getSingleBlog);

// UPDATE A BLOG
router.patch("/:id", blogController.updateBlog);

// DELETE A BLOG
router.delete("/:id", blogController.deleteBlog);

// EXPORT ROUTER
module.exports = router;
