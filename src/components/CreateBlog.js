import React, { useState } from "react";
import { Form, Button, Container, Row } from "react-bootstrap";
import { useContext } from "react";
import { BlogContext } from "../context/BlogContext";
function CreateBlog() {
  const { createBlog } = useContext(BlogContext);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    createBlog(title, body);
    setTitle("");
    setBody("");
  };
  return (
    <Container>
      <h2 className="my-4">Create Blog</h2>
      <Row className="justify-content-center">
        <div className="col-sm-6 col-md-6">
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={title}
                placeholder="Enter title"
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Content</Form.Label>
              <Form.Control
                as="textarea"
                placeholder="I like to..."
                value={body}
                onChange={(e) => {
                  setBody(e.target.value);
                }}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </div>
      </Row>
    </Container>
  );
}

export default CreateBlog;
