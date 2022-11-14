import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import HeaderComp from "./header";
//import axios from "axios";
//import { useParams } from "react-router-dom";
//import Form from "./Form";
//please work

function Restaurant(props) {
  function makeTableBody() {
    const elems = props.restaurant.menuitems.map((item) => {
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
      <div class="row">{makeTableBody}</div>
    </div>
  );
}

export default Restaurant;
