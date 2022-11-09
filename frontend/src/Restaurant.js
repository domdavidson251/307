import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";
//import Form from "./Form";
//please work

function Restaurant() {
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

export default Restaurant;
