import React, {useState, useEffect} from 'react';
import "./assets/css/style.css"
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return ( 
      /*<div> 
         <h1>Hello, React!</h1>
         <Button>Test Button</Button> 
      </div> 
      */
      <>
      <div class="header">
        <h1>Learn By Dining</h1>
        <p>Find the Best Food on Campus</p>
      </div>
      
      <Navbar className="color-nav" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
    ); 
}

export default App;