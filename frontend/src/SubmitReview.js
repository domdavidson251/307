import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Form from "./Form";
import axios from "axios";
import "./assets/css/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";

const mongoose = require("mongoose");

function SubmitReview(props) {
  let urlParams = useParams();
  const restaurantName = urlParams.restaurant;
  console.log(restaurantName);
  //const rest = props.restaurantData.filter((r) => r.name === restaurantName);

  const [reviews, setReviews] = useState([]);
  //const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetchAllReviews().then((result) => {
      if (result) {
        setReviews(result);
      }
    });
    /*fetchAllRestaurants().then((result) => {
      if (result) {
        setRestaurants(result);
      }
    });
    */
  }, [reviews]);

  async function fetchAllReviews() {
    try {
      const response = await axios.get("http://localhost:4000/reviews");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function fetchAllRestaurants() {
    try {
      const response = await axios.get("http://localhost:4000/restaurants");
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeReviewsPostCall(review) {
    try {
      const response = await axios.post(
        "http://localhost:4000/reviews",
        review
      );
      console.log(response);
      return response;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async function makeRestaurantPatchCall(review) {
    console.log(review._id);
    try {
      const response = await axios.patch(
        "http://localhost:4000/restaurants/" + restaurantName,
        { _id: review._id }
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

    console.log(resp);

    makeRestaurantPatchCall(resp);
  }

  return (
    <div>
      <HeaderComp></HeaderComp>
      <div className="container">
        <Form handleSubmit={updateReviews} />
      </div>
    </div>
  );
}

export default SubmitReview;
