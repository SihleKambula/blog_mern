import React from "react";
import { Card, Button } from "react-bootstrap";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
function BlogList({ blogs }) {
  const { getBlog } = useContext(BlogContext);
  let blog = blogs.map((blog) => {
    return (
      <Card className="col-md-5 col-sm-12 my-2 mx-2" key={blog._id}>
        <Card.Body>
          <Card.Title>{blog.title}</Card.Title>
          <Card.Text>{blog.body}</Card.Text>
          <Button variant="primary" onClick={() => getBlog(blog._id)}>
            View Blog
          </Button>
        </Card.Body>
      </Card>
    );
  });
  return <div className="row justify-content-center">{blog}</div>;
}

export default BlogList;
