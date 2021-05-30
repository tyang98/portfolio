import React, { useContext } from "react"
import ThemeContext from "../utils/theme"
import { Navbar, Nav, Form, Image } from "react-bootstrap"
import { Link } from "gatsby"
import "./Fontawesome.js"
import Brightness6Icon from "@material-ui/icons/Brightness6"
import Brightness3Icon from "@material-ui/icons/Brightness3"

export default () => {
  const { dark, toggleDark, toString } = useContext(ThemeContext)
  return (
    <Navbar variant={toString()} fixed="top" collapseOnSelect expand="md">
      <Navbar.Brand className="pl-5 ml-5" as={Link} to="/">
        {dark ? (
          <Image src="../../icons/tony-dark.png" />
        ) : (
          <Image src="../../icons/tony-light.png" />
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-end"
      >
        <Nav className="pr-3 mr-4 nav-links">
          <Nav.Link
            className="ml-2"
            as={Link}
            to="/about"
            title="About"
            style={{ fontSize: 20 }}
          >
            About
          </Nav.Link>
          <Nav.Link
            className="ml-2"
            as={Link}
            to="/projects"
            title="Projects"
            style={{ fontSize: 20 }}
          >
            Projects
          </Nav.Link>
          <div className="ml-4 mt-2">
            {dark ? (
              <Brightness3Icon style={{ color: "white" }} />
            ) : (
              <Brightness6Icon />
            )}
          </div>
          <Form className="ml-3 my-auto">
            <Form.Check
              type="switch"
              id="custom-switch"
              label=""
              title="Toggle Theme"
              checked={dark}
              onChange={toggleDark}
            />
          </Form>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
