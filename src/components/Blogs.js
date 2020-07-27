import React, { useContext } from "react";

import BlogList from "./BlogList";
import { BlogContext } from "../context/BlogContext";

function Blogs() {
  const { blogs, loading } = useContext(BlogContext);
  return (
    <div className="blogs">
      <h2 className="my-4">All Blogs</h2>
      {loading && <h4 className="text-muted">Loading Blogs......</h4>}
      {blogs.length > 0 && <BlogList blogs={blogs} />}
    </div>
  );
}
export default Blogs;
