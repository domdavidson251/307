import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantReviews from "./RestaurantReviews";
import axios from "axios";
import { useParams } from "react-router-dom";
import { propTypes } from "react-bootstrap/esm/Image";
//import Form from "./Form";
//please work
function Restaurant(props) {
  const [restaurant, setRestaurant] = useState([]);
  let urlParams = useParams();
  const restaurantName = urlParams.restaurant;

  async function fetchRestaurant() {
    try {
      const response = await axios.get(
        "http://localhost:4000/restaurants/" + restaurantName
      );
      return response.data.restaurants_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }
  useEffect(() => {
    console.log("USE EFFECT CALLED");
    fetchRestaurant().then((result) => {
      if (result) setRestaurant(result);
    });
  }, []);

  //console.log(restaurantName);
  //console.log(restaurant[0]);
  const reviewLink = "/" + restaurantName + "/submit-review";
  return (
    <div>
      <HeaderComp></HeaderComp>
      <div class="container mt-4">
        <div className="subheader">
          <h1>{restaurantName}</h1>
          <a href="#reviews">
            <input type="button" value="Jump to Reviews" />
          </a>
          <a href={reviewLink}>
            <input type="button" value="Submit a Review" />
          </a>
        </div>
        <div className="subsubheader">
          <h1>Menu</h1>
        </div>
        <RestaurantMenu rest={restaurant[0]} menu={props.menuItems} />
        <div className="subsubheader">
          <h1 id="reviews">Reviews</h1>
        </div>
        <RestaurantReviews rest={restaurant[0]}></RestaurantReviews>
      </div>
    </div>
  );
}
export default Restaurant;
