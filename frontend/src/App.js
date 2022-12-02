import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import RestaurantGrid from "./RestaurantGrid";
import Restaurant from "./Restaurant";
import SubmitReview from "./SubmitReview";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [restaurants, setRestaurants] = useState([]);
  const [menuitems, setMenuItems] = useState([]);

  async function fetchAllRestaurants() {
    try {
      const response = await axios.get("http://localhost:4000/restaurants");
      return response.data.restaurants_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  async function fetchAllMenuItems() {
    try {
      const response = await axios.get("http://localhost:4000/menu");
      return response.data.menuitems_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAllRestaurants().then((result) => {
      if (result) setRestaurants(result);
    });
    fetchAllMenuItems().then((result) => {
      if (result) setMenuItems(result);
    });
  }, []);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<RestaurantGrid restaurantData={restaurants} />}
      />
      <Route
        path="/:restaurant"
        element={<Restaurant menuItems={menuitems} />}
      />
      <Route
        path="/:restaurant/submit-review"
        element={<SubmitReview restaurantData={restaurants} />}
      />
    </Routes>
  );
}

export default App;
