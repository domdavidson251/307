import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";
import Form from "./Form";

function RestaurantMenu() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // temporary fake data for restaurants
    setItems([
      {
        name: "sandwich",
        description: "meat in between bread",
      },
      {
        name: "soda",
        description: "carbonated",
      },
      {
        name: "pizza",
        description: "bruh",
      },
      {
        name: "pasta",
        description: "bruh pt2",
      },
    ]);
  }, []);

  function makeTableBody() {
    const elems = items.map((item) => {
      return (
        <div class="col-auto mb-3">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{item.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">{item.description}</p>
            </div>
          </div>
        </div>
      );
    });

    return elems;
  }

  return (
    <div>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossorigin="anonymous"
      ></script>
      <script
        src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossorigin="anonymous"
      ></script>

      <HeaderComp></HeaderComp>
      <div class="container mt-4">
        <div class="container">
          <div class="row">
            <a href="/submit-review">
              <input type="button" value="Submit a Review" />
            </a>
          </div>
        </div>

        <div class="row">{makeTableBody()}</div>
      </div>
    </div>
  );
}

export default RestaurantMenu;
