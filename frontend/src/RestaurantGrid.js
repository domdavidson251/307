//import {Container, Row, Col} from 'react-bootstrap';
import { useEffect, useState } from "react";
import HeaderComp from "./header";
//import Restaurant from "./Restaurant";
//import { Routes, Route } from "react-router-dom";

function RestaurantGrid(props) {
  const restaurantData = props.restaurantData;
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function makeTableBody() {
    const reduced = restaurantData.reduce((accumulator, restaurant) => {
      if (restaurant.name.toLowerCase().includes(searchInput.toLowerCase())) {
        const link = "http://localhost:3000/" + restaurant.name;
        const linkStyle = { "text-decoration": "none" };
        accumulator.push(
          <div key={restaurant._id} class="col-auto mb-3">
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
      }
      return accumulator;
    }, []);

    return reduced;
  }

  return (
    <>
      <HeaderComp></HeaderComp>
      <div>
        <div class="container mt-4">
          <input
            type="text"
            placeholder="Search here"
            onChange={handleSearch}
            value={searchInput}
          />
          <div class="row"></div>
          <div class="row">{makeTableBody()}</div>
        </div>
      </div>
    </>
  );
}

export default RestaurantGrid;
