import React from 'react';
import "./assets/css/style.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const HeaderComp = () => {
    return (
        <div>
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
                    <LinkContainer to="/features">
                        <Nav.Link href="#features">Features</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/pricing">
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to="/submit-review">
                        <Nav.Link>Submit Review</Nav.Link>
                    </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
      </div>
    );
}

export default HeaderComp;