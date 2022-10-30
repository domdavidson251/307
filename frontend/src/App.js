import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderComp from './header';

function App() {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    // temporary fake data for restaurants 
    setRestaurants(
      [
        {
          name: "Subway",
          description: "Restaurant"
        },
        {
          name: "a",
          description: "Restaurant"
        },
        {
          name: "b",
          description: "Restaurant"
        },
        {
          name: "",
          description: "Restaurant"
        },
      ]
    )
  }, []);

  function makeTableBody() {
    const eles = restaurants.map((restaurant, index) => {
      const link = "http://localhost:3000/restaurants/" + restaurant.name;
      const linkStyle = { "text-decoration": "none" };
      return (
        <div class="col-auto mb-3">
          <a href={link} style={linkStyle}>
          <div class="card" style={{width: '18rem'}}>
              <div class="card-body">
                  <h5 class="card-title">{restaurant.name}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                  <p class="card-text">text</p>
              </div>
          </div>
          </a>
        </div>
      );
    });
    return eles;
  }
  
  return (
    <div>
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
      <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
      
      <HeaderComp></HeaderComp>
      <div class="container mt-4">
        <div class="row">
          {makeTableBody()}
        </div>
      </div>
    </div>
  ); 
}

export default App;