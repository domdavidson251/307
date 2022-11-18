import React from "react";
import "./assets/css/style.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./SearchBar";

import Data from './data.json';


const HeaderComp = () => {
  return (
    <div>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>

      <div className="header">
        <h1>Learn By Dining</h1>
        <p>Find the Best Food on Campus</p>
      </div>
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            {/* <LinkContainer to="/submit-review">
              <Nav.Link>Submit Review</Nav.Link>
            </LinkContainer> */}
          </Nav>
        </Container>
      </Navbar>
      {/* <SearchBar placeholder="Enter..." /> */}
    </div>
  );
};

export default HeaderComp;
