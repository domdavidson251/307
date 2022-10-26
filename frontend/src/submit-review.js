import React from 'react';
import Form from './Form';
import "./assets/css/style.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const SubmitReview = () => {
    return (
      <div>
        <HeaderComp></HeaderComp>
        <div>
          <p>submit review page!</p>
        </div>
        <Navbar className="color-nav" variant="dark">
          <Container>
            <Nav className="me-auto">
              <LinkContainer to="/">
                <Nav.Link href="#home">Home</Nav.Link>
              </LinkContainer>
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <LinkContainer to="/submit-review">
                <Nav.Link>Submit Review</Nav.Link>
              </LinkContainer>
            </Nav>
          </Container>
        </Navbar>
        
        <div className="container">
          {/*<Table characterData={characters} removeCharacter={removeOneCharacter} />*/}
          <Form />
        </div>
        <div><p>will prob make a header component and put at top of all pages
            instead of having copied html in every component</p>SUBMIT REVIEW PAGE </div>
        </div>
    )
}
 
export default SubmitReview;