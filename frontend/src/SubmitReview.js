import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";

function SubmitReview(props) {
  let urlParams = useParams();
  const restaurantName = urlParams.restaurant;

  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetchAllReviews().then((result) => {
      if (result) {
        setReviews(result);
      }
    });
  }, [reviews]);

  async function fetchAllReviews() {
    try {
      const response = await axios.get("http://localhost:4000/reviews");
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeReviewsPostCall(review) {
    review.restaurant = restaurantName;
    try {
      const response = await axios.post(
        "http://localhost:4000/reviews",
        review
      );
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  function updateReviews(review) {
    const resp = makeReviewsPostCall(review).then((result) => {
      if (result && result.status === 200) {
        setReviews([...reviews, review]);
      }
    });
  }

  return (
    <div>
      <HeaderComp></HeaderComp>
      <div className="container mt-4">
        <div className="subheader">
          <h1>{restaurantName}</h1>
        </div>
        <div className="container">
          <Form handleSubmit={updateReviews} />
        </div>
      </div>
    </div>
  );
}

export default SubmitReview;
