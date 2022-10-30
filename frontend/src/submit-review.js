import React, {useState, useEffect} from 'react';
import Form from './Form';
import axios from 'axios';
import "./assets/css/style.css"
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from "./header";

function SubmitReview() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchAll().then(result => {
      if (result) { 
        setReviews(result);
      }
    });
  }, [reviews]);

  async function fetchAll(){
    try {
      const response = await axios.get('http://localhost:4000/reviews');
      console.log(response);
      return response;
    } catch (error) {
      console.log(error); 
      return false;         
    }
  }

  async function makePostCall(review){
    try {
      const response = await axios.post('http://localhost:4000/reviews', review);
      return response;
    }
    catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateList(review) { 
    makePostCall(review).then( result => {
    if (result && result.status === 200)
      setReviews([...reviews, review] );
    });
  }

  return (
    <div>
      <HeaderComp></HeaderComp>
      <div className="container">
      <Form handleSubmit={updateList} />
      </div>
    </div>
  )
}
 
export default SubmitReview;
