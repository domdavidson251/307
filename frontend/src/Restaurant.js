import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReviews from "./RestaurantReviews";
import axios from "axios";
import { useParams } from "react-router-dom";
//import Form from "./Form";
//please work

function Restaurant(props) {
  let urlParams = useParams();
  const restaurantName = urlParams.restaurant;
  const rest = props.restaurantData.filter((r) => r.name === restaurantName);
  console.log(restaurantName);
  console.log(rest[0]);
  const reviewLink = "/" + restaurantName + "/submit-review";

  return (
    <div>
      <HeaderComp></HeaderComp>

      <div class="container mt-4">
        <div class="container">
          <div class="row">
            <a href={reviewLink}>
              <input type="button" value="Submit a Review" />
            </a>
          </div>
        </div>

        <RestaurantMenu restaurant={rest[0]}></RestaurantMenu>
        <RestaurantReviews restaurant={rest[0]}></RestaurantReviews>
      </div>
    </div>
  );
}

export default Restaurant;
