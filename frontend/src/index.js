import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import SubmitReview from './submit-review';
import Features from './features';
import Pricing from './pricing';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route exact path="/" element={<App />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/submit-review" element={<SubmitReview />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
  