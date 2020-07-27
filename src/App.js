import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter, Route } from "react-router-dom";

import NavbarCon from "./components/Navbar";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/CreateBlog";
import Blog from "./components/Blog";
import BlogContextProvider from "./context/BlogContext";
import "./index.css";

function App() {
  // JSX
  return (
    <BrowserRouter>
      <Container fluid className="px-0">
        <header className="bg-primary">
          <NavbarCon />
        </header>
        <Container>
          <BlogContextProvider>
            <Route exact path="/" component={Blogs} />
            <Route path="/createblog" component={CreateBlog} />
            <Route path="/blog/:id" component={Blog} />
          </BlogContextProvider>
        </Container>
      </Container>
    </BrowserRouter>
  );
}

export default App;
