import { useState } from "react";
import { Card } from "react-bootstrap";
import HeaderComp from "./header";


function RestaurantGrid(props) {
  const restaurantData = props.restaurantData;
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
  };

  function makeTableBody() {
    const reduced = restaurantData.reduce((accumulator, restaurant) => {
      if (restaurant.name.toLowerCase().includes(searchInput.toLowerCase())) {
        const link = "http://localhost:3000/" + restaurant.name;
        const linkStyle = { "text-decoration": "none" };
        accumulator.push(
          <div key={restaurant._id} className="col-auto mb-3">
            <a href={link} style={linkStyle}>
            <Card.Body className="homepg" style={{ width: "18rem" }}>
                {/* <img src={restaurant.img} alt={restaurant.name} /> */}
                <Card.Body>
                  <Card.Title>
                    <h5>{restaurant.name}</h5>
                    <h6>{restaurant.avg_rating} stars</h6>
                  </Card.Title>
                </Card.Body>
              </Card.Body>
            </a>
          </div>
        );
      }
      return accumulator;
    }, []);
    return reduced;
  }

  return (
    <>
      <HeaderComp></HeaderComp>
      <div>
        <div className="container mt-4">
          <div style={{ width: "18rem" }}>
            <input
              type="text"
              placeholder="Search here"
              onChange={handleSearch}
              value={searchInput}
            />
          </div>
          <div className="row"></div>
          <div className="row">{makeTableBody()}</div>
        </div>
      </div>
    </>
  );
}

export default RestaurantGrid;