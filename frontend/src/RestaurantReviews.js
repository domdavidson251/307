import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import HeaderComp from "./header";
import axios from "axios";
import { useParams } from "react-router-dom";
//import Form from "./Form";
//please work

function RestaurantReviews(props) {
  function ReviewBody() {
    if (props.rest) {
      const elems = props.rest.reviews.map((review) => {
        return (
          <div className="col-auto mb-3" key="key1">
            <div className="card" style={{ width: "18rem" }} key="key1">
              <div className="card-body" key="key1">
                <h5 className="card-title" key="key1">
                  {review}
                </h5>
                <h6 className="card-subtitle mb-2 text-muted" key="key2">
                  Card subtitle
                </h6>
                <p className="card-text" key="key3">
                  {review.review}
                </p>
              </div>
            </div>
          </div>
        );
      });

      return <>{elems}</>;
    } else {
      return <p>Waiting for restaurant reviews data...</p>;
    }
  }

  return (
    <div>
      <ReviewBody />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
        integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        crossOrigin="anonymous"
      ></link>
      <div className="container-fluid px-1 py-5 mx-auto">
        <div className="row justify-content-center">
          <div className="col-xl-7 col-lg-8 col-md-10 col-12 text-center mb-5">
            <div className="card">
              <div className="row justify-content-left d-flex">
                <div className="col-md-4 d-flex flex-column">
                  <div className="rating-box">
                    <h1 className="pt-4" key="key1">
                      4.0
                    </h1>
                    <p className="" key="key2">
                      out of 5
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card">
              <div className="row d-flex">
                <div className="d-flex flex-column">
                  <h3 className="mt-2 mb-0" key="key1">
                    Mukesh Kumar
                  </h3>
                  <div key="key2">
                    <p className="text-left" key="key1">
                      <span className="text-muted" key="key1">
                        4.0
                      </span>
                      <span
                        className="fa fa-star star-active ml-3"
                        key="key2"
                      ></span>
                      <span
                        className="fa fa-star star-active"
                        key="key3"
                      ></span>
                      <span
                        className="fa fa-star star-active"
                        key="key4"
                      ></span>
                      <span
                        className="fa fa-star star-active"
                        key="key5"
                      ></span>
                      <span
                        className="fa fa-star star-inactive"
                        key="key6"
                      ></span>
                    </p>
                  </div>
                </div>
                <div className="ml-auto">
                  <p className="text-muted pt-5 pt-sm-3" key="key1">
                    10 Sept
                  </p>
                </div>
              </div>
              <div className="row text-left">
                <h4 className="blue-text mt-3" key="key1">
                  "An awesome activity to experience"
                </h4>
                <p className="content" key="key2">
                  If you really enjoy spending your vacation 'on water' or would
                  like to try something new and exciting for the first time.
                </p>
              </div>
              <div className="row text-left mt-4">
                <div className="like mr-3 vote">
                  <img
                    src="https://i.imgur.com/mHSQOaX.png"
                    alt=""
                    key="key1"
                  />
                  <span className="blue-text pl-2" key="key2">
                    20
                  </span>
                </div>
                <div className="unlike vote">
                  <img
                    src="https://i.imgur.com/bFBO3J7.png"
                    alt=""
                    key="key1"
                  />
                  <span className="text-muted pl-2" key="key2">
                    4
                  </span>
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
