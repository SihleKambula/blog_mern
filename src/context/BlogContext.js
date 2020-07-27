import React, { createContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";

// CREATE CONTEXT
export const BlogContext = createContext();

function BlogContextProvider(props) {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  // GET BLOGS FROM DB
  useEffect(() => {
    axios.get("http://localhost:3030/blogs").then((res) => {
      setBlogs(res.data);
      setLoading(false);
    });
  }, [blogs]);

  //create a blog
  let history = useHistory();
  const createBlog = (title, body) => {
    axios
      .post("http://localhost:3030/blogs", {
        title,
        body,
      })
      .then((res) => setBlogs([...blogs, res.data]));
    history.push("/");
  };

  // get a single blog
  const getBlog = (id) => {
    history.push(`/blog/${id}`);
  };

  // Update a blog
  const updateBlog = (title, body, id) => {
    return axios.patch(`http://localhost:3030/blogs/${id}`, {
      title: title,
      body: body,
    });
  };

  // delet a blog
  const deleteBlog = (id) => {
    axios.delete(`http://localhost:3030/blogs/${id}`).then(() => {
      history.push("/");
    });
  };
  return (
    <BlogContext.Provider
      value={{ blogs, loading, createBlog, getBlog, updateBlog, deleteBlog }}
    >
      {props.children}
    </BlogContext.Provider>
  );
}

export default BlogContextProvider;
