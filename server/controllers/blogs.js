const Blog = require("../Models/Blog");

// CREATE NEW BLOG
const createBlog = (req, res) => {
  const { title, body } = req.body;
  const blog = new Blog({
    title,
    body,
  });
  blog
    .save()
    .then((result) => {
      res.json({ result: result });
    })
    .catch((err) => res.json({ err: err }));
};

// GET ALL BLOGS
const getBlogs = (req, res) => {
  Blog.find()
    .then((results) => {
      res.json(results);
    })
    .catch((err) => res.json({ err: err }));
};

// GET SINGLE BLOG
const getSingleBlog = (req, res) => {
  const { id } = req.params;
  Blog.findById(id)
    .then((result) => res.json(result))
    .catch((err) => res.json(err));
};

// UPDATE A BLOG
const updateBlog = (req, res) => {
  const { id } = req.params;
  const { title, body } = req.body;
  Blog.findById(id).then((result) => {
    Blog.updateOne(
      { _id: id },
      {
        $set: {
          title: title ? title : result.title,
          body: body ? body : result.body,
        },
      }
    )
      .then(() => {
        Blog.findById(id).then((response) => res.json({ response }));
      })
      .catch((err) => res.json(err));
  });
};

// DELECT A BLOG
const deleteBlog = (req, res) => {
  const { id } = req.params;
  Blog.deleteOne({ _id: id })
    .then(() => {
      res.json({ msg: "Blog deleted" });
    })
    .catch((err) => res.json(err));
};

// Export the functions
module.exports = {
  getBlogs,
  createBlog,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
