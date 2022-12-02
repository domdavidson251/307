import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";
import axios from "axios";

function RestaurantReviews(props) {
  const [reviews, setReviews] = useState([]);
  const [sortType, setSortType] = useState("most recent");
  const [modReviews, setModReviews] = useState([]);

  async function fetchAllReviews() {
    try {
      const response = await axios.get("http://localhost:4000/reviews");
      return response.data.reviews_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchAllReviews().then((result) => {
      if (result) setReviews(result);
    });

    if (props.rest) {
      // get list of backend's review objs
      const gg = props.rest.reviews.map((review) => {
        const restReview = reviews.filter((temp) => {
          return temp._id.toString() === review;
        })[0];

        return restReview;
      });

      // filter out all undefined entries
      const filtered = gg.filter((a) => a !== undefined);

      // sort list of backend's review objs
      let sortedObjs = filtered.sort((a, b) => (a.stars > b.stars ? -1 : 1));
      if (sortType === "least rated") {
        sortedObjs = filtered.sort((a, b) => (a.stars > b.stars ? 1 : -1));
      }
      if (sortType === "most recent") {
        sortedObjs = filtered.sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
        );
      }

      setModReviews(sortedObjs);
    }
  }, [sortType, props.rest, reviews]);

  function generateStars(numStars) {
    let starArray = [0, 0, 0, 0, 0];
    starArray = starArray.fill(1, 0, numStars);
    const elems = starArray.reduce((accumulator, val) => {
      if (val === 1) {
        accumulator.push(<>{String.fromCharCode(9733)}</>);
      } else {
        accumulator.push(<>{String.fromCharCode(9734)}</>);
      }

      return accumulator;
    }, []);

    return (
      <div>
        <div className="row">{elems}</div>
      </div>
    );
  }

  function ReviewBody() {
    if (modReviews.length > 0) {
      // create table
      const eles = modReviews.map((review) => {
        var dat = "";
        if (review.date) {
          dat = new Date(review.date).toISOString().split("T")[0];
        }
        return (
          <div className="card" style={{ width: "60rem" }}>
            <div className="row d-flex">
              <h6 className="d-flex flex-column">
                <div class="row">
                  <div class="col">{generateStars(review.stars)}</div>
                  <div class="flex-child-element">{review.author}</div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col"></div>
                  <div class="col">{dat}</div>
                </div>
              </h6>
              <p className="card-text">{review.review}</p>
            </div>
          </div>
        );
      });

      return <>{eles}</>;
    }
  }

  return (
    <div>
      <div style={{ width: "18rem" }}>
        Sort By
        <select onChange={(e) => setSortType(e.target.value)}>
          <option value="most recent">most recent</option>
          <option value="highest rated">highest rated</option>
          <option value="least rated">least rated</option>
        </select>
      </div>

      <ReviewBody />
    </div>
  );
}

export default RestaurantReviews;
