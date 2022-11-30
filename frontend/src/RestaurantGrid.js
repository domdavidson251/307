import { useState } from "react";
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
              <div className="card-body" style={{ width: "18rem" }}>
                {/* <img src={restaurant.img} alt={restaurant.name} /> */}
                <div className="card-body">
                  <h5 className="card-title">{restaurant.name}</h5>
                </div>
              </div>
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