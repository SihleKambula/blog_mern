import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Container,
  Button,
  Modal,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FaTrash, FaEdit } from "react-icons/fa";
import { BlogContext } from "../context/BlogContext";

function Blog() {
  const { deleteBlog, updateBlog } = useContext(BlogContext);
  const { id } = useParams();
  const [blog, setBlog] = useState({});
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleUpdate = () => {
    updateBlog(title, body, id).then((res) => {
      setBlog(res.data.response);
      setShow(false);
    });
  };
  const handleShow = () => {
    setTitle(blog.title);
    setBody(blog.body);
    setShow(true);
  };

  useEffect(() => {
    axios.get(`http://localhost:3030/blogs/${id}`).then((res) => {
      setBlog(res.data);
      setLoading(true);
    });
  }, [id]);
  return (
    <Container className="my-5">
      <h3>{blog.title}</h3>
      <p>{blog.body}</p>
      <Button
        onClick={() => {
          deleteBlog(blog._id);
        }}
        style={{ background: "transparent", border: "none" }}
      >
        {loading && (
          <FaTrash className="text-danger" style={{ fontSize: "1.2rem" }} />
        )}
      </Button>
      <Button
        onClick={handleShow}
        style={{ background: "transparent", border: "none" }}
      >
        {loading && (
          <FaEdit className="text-info" style={{ fontSize: "1.2rem" }} />
        )}
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            <InputGroup>
              <FormControl
                style={{ border: "none", width: "100%" }}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </InputGroup>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <InputGroup>
            <FormControl
              value={body}
              as="textarea"
              onChange={(e) => setBody(e.target.value)}
            />
          </InputGroup>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Blog;
