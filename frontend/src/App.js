import "bootstrap/dist/css/bootstrap.min.css";
import HeaderComp from "./header";
import RestaurantGrid from "./RestaurantGrid";
import Restaurant from "./Restaurant";
import SubmitReview from "./submit-review";
import "./App.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RestaurantGrid />} />
      <Route path="/:restaurant" element={<Restaurant />} />
      <Route path="/submit-review" element={<SubmitReview />} />
    </Routes>
  );
}

export default App;
