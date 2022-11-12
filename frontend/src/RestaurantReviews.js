import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import HeaderComp from "./header";
import axios from "axios";
import { useParams } from "react-router-dom";
//import Form from "./Form";
//please work

function RestaurantReviews(props) {
  function makeTableBody() {
    const elems = props.restaurant.reviews.map((review) => {
      return (
        <div class="col-auto mb-3">
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{review.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
              <p class="card-text">{review.review}</p>
            </div>
          </div>
        </div>
      );
    });

    return elems;
  }

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossorigin="anonymous"
      ></link>
      <div class="container-fluid px-1 py-5 mx-auto">
        <div class="row justify-content-center">
          <div class="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
            <div class="card">
              <div class="row justify-content-left d-flex">
                <div class="col-md-4 d-flex flex-column">
                  <div class="rating-box">
                    <h1 class="pt-4">4.0</h1>
                    <p class="">out of 5</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="row d-flex">
                <div class="d-flex flex-column">
                  <h3 class="mt-2 mb-0">Mukesh Kumar</h3>
                  <div>
                    <p class="text-left">
                      <span class="text-muted">4.0</span>
                      <span class="fa fa-star star-active ml-3"></span>
                      <span class="fa fa-star star-active"></span>
                      <span class="fa fa-star star-active"></span>
                      <span class="fa fa-star star-active"></span>
                      <span class="fa fa-star star-inactive"></span>
                    </p>
                  </div>
                </div>
                <div class="ml-auto">
                  <p class="text-muted pt-5 pt-sm-3">10 Sept</p>
                </div>
              </div>
              <div class="row text-left">
                <h4 class="blue-text mt-3">
                  "An awesome activity to experience"
                </h4>
                <p class="content">
                  If you really enjoy spending your vacation 'on water' or would
                  like to try something new and exciting for the first time.
                </p>
              </div>
              <div class="row text-left mt-4">
                <div class="like mr-3 vote">
                  <img src="https://i.imgur.com/mHSQOaX.png" />
                  <span class="blue-text pl-2">20</span>
                </div>
                <div class="unlike vote">
                  <img src="https://i.imgur.com/bFBO3J7.png" />
                  <span class="text-muted pl-2">4</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantReviews;
