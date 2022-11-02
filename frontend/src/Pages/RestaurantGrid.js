//import {Container, Row, Col} from 'react-bootstrap';
//import {useEffect, useState} from 'react';
import restaurantData from "./restaurantData";

//===============================================================================

function RestaurantGrid() {
  function makeTableBody() {
    const eles = restaurantData.map((restaurant) => {
      const link = "http://localhost:3000/restaurants/" + restaurant.name;
      const linkStyle = { "text-decoration": "none" };
      return (
        <div class="col-auto mb-3">
          <a href={link} style={linkStyle}>
            <div class="card" style={{ width: "18rem" }}>
              <img src={restaurant.img} alt={restaurant.name} />
              <div class="card-body">
                <h5 class="card-title">{restaurant.name}</h5>
              </div>
            </div>
          </a>
        </div>
      );
    });
    return eles;
  }

  return (
    <div>
      <div class="container mt-4 row">{makeTableBody()}</div>
    </div>
  );
}

export default RestaurantGrid;
