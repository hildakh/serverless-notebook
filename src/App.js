import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "./App.css";
import Routes from "./Routes";
import { LinkContainer } from "react-router-bootstrap";
import { Auth } from 'aws-amplify';

export default function App(props) {
  const handleLogout = function() {
    userHasAuthenticated(false);
  }
  const [isAuthenticated, userHasAuthenticated] = useState(false);

 // We start with the value set to true because as we first load our app, it’ll start by checking the current authentication state.

  const [isAuthenticating, setIsAuthenticating] = useState(true);

  return (
    <div className="App container">
      <Navbar fluid collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Scratch</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        {/* The Navbar.Collapse component ensures that on mobile devices the two links will be collapsed. */}
        <Navbar.Collapse>
          <Nav pullRight>
            { isAuthenticated ?
            <NavItem onClick={handleLogout}>Logout</NavItem>
            : <>
            <LinkContainer to="/signup">
              <NavItem>Signup</NavItem>
            </LinkContainer>
            <LinkContainer to="/login">
              <NavItem>Login</NavItem>
            </LinkContainer>
            </>
          }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Routes appProps={{ isAuthenticated, userHasAuthenticated }} />
    </div>
  );
}
