import React from 'react';
import Form from './Form';
import "./assets/css/style.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from "./header";

const SubmitReview = () => {
    return (
      <div>
        <HeaderComp></HeaderComp>
        <div className="container">
          <Form />
        </div>
      </div>
    )
}
 
export default SubmitReview;
