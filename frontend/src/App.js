import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";
import RestaurantGrid from "./RestaurantGrid";
import Restaurant from "./Restaurant";
import SubmitReview from "./SubmitReview";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import axios from "axios";

function App() {
  const [restaurants, setRestaurants] = useState([]);

  async function fetchAll() {
    try {
      const response = await axios.get("http://localhost:4000/restaurants");
      return response.data.restaurants_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAll().then((result) => {
      if (result) setRestaurants(result);
    });
  }, []);

  return (
    <Routes>
      <Route
        path="/"
        element={<RestaurantGrid restaurantData={restaurants} />}
      />
      <Route
        path="/:restaurant"
        element={<Restaurant restaurantData={restaurants} />}
      />
      <Route
        path="/:restaurant/submit-review"
        element={<SubmitReview restaurantData={restaurants} />}
      />
    </Routes>
  );
}

export default App;
