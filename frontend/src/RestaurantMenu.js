import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import axios from "axios";
import { useParams } from "react-router-dom";

function RestaurantMenu(props) {
  //const [restaurant, setRestaurant] = useState();
  //const restaurant = props.rest;
  let urlParams = useParams();
  const restaurantName = urlParams.restaurant;

  /*async function fetchRestaurant() {
    try {
      const response = await axios.get("http://localhost:4000/restaurants/" + restaurantName);
      return response.data.restaurants_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchRestaurant().then((result) => {
      if (result) setRestaurant(result[0]);
    });
  }, []);
  */

  function TableBody() {
    //const rest = restaurant[0];
    console.log("MENU TEST");
    //console.log(props.rest);
    // console.log(restaurant[0]);
    if (props.rest) {
      const elems = props.rest['menuitems'].map((item) => {
        return (
          <div key={item} class="col-auto mb-3">
            <div class="card" style={{ width: "18rem" }}>
              <div class="card-body">
                {/* <h5 class="card-title">{item.name}</h5> */}
                <h6 class="card-subtitle mb-2 text-muted">{item}</h6>
                {/* <p class="card-text">{item.description}</p> */}
              </div>
            </div>
          </div>
        );
      });

    return (
        <div>
        <div class="row">{elems}</div>
        </div>
      )
    } else {
      return (<p>Waiting for restaurant data...</p>);
    }
  }
  return (
    
    <TableBody />
  );
}
export default RestaurantMenu;