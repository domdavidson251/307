import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubmitReview from './submit-review';
import RestaurantMenu from './RestaurantMenu';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/submit-review" element={<SubmitReview />} />
            <Route path="/restaurants/*" element={<RestaurantMenu />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
  