import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { FaThLarge, FaBookOpen } from "react-icons/fa";
function NavbarCon() {
  return (
    <>
      <Navbar expand="lg">
        <Navbar.Brand href="/" className="text-muted">
          Wolf Blog
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav" className="desktop">
          <Nav className="ml-auto">
            <Link to="/" className="text-white h4 ">
              Blog
            </Link>
            <Link to="/createblog" className="ml-4 text-white h4">
              Create
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <div className="sidebar">
        <ul>
          <IconContext.Provider value={{ color: "white", size: "1.5rem" }}>
            <li>
              <Link to="/">
                <FaThLarge />
              </Link>
            </li>
            <li>
              <Link to="/createblog">
                <FaBookOpen />
              </Link>
            </li>
          </IconContext.Provider>
        </ul>
      </div>
    </>
  );
}

export default NavbarCon;
