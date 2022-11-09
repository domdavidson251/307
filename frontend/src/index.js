import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import SubmitReview from "./submit-review";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantGrid from "./RestaurantGrid";
import Restaurant from "./Restaurant";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  /*<BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/*<Route path="restaurants/*" element={<Restaurant />} />
        <Route exact path="/kj" element={<RestaurantGrid />}>
            <Route exact path="/dfkdf" element={<Restaurant />}>
            <Route path="/dlkj" element={<RestaurantMenu />} />
            <Route path="/" element={<RestaurantReviews />} />
            <Route path="/submit-review" element={<SubmitReview />} />
        </Route>
      </Route>}
      </Route>
    </Routes>
  </BrowserRouter>,
  */
  document.getElementById("root")
);
