import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Navbar } from "react-bootstrap";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <Router>
            <Navbar id="navb">
              <Link id="Home" to="/">
                Home
              </Link>

              <Link id="Projects" to="/projects">
                Projects
              </Link>

              <Link id="Services" to="/services">
                Services
              </Link>

              <Link id="Contact" to="/contact">
                Contact
              </Link>

              <Route
                path="/"
                exact
                render={() => {
                  return <h1>You Choose Home</h1>;
                }}
              ></Route>
              <Route
                path="/projects"
                exact
                render={() => {
                  return <h1>You Choose Projects</h1>;
                }}
              ></Route>
              <Route
                path="/services"
                exact
                render={() => {
                  return <h1>You Choose Services</h1>;
                }}
              ></Route>
              <Route
                path="/contact"
                exact
                render={() => {
                  return <h1>You Choose Contact</h1>;
                }}
              ></Route>
            </Navbar>
          </Router>
        </div>
      </div>
    );
  }
}

export default BootstrapNavbar;
