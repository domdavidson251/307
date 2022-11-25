import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

function RestaurantMenu(props) {
  /*
  const [restaurant, setRestaurant] = useState();
  const restaurant = props.rest;

  async function fetchRestaurant() {
    try {
      const response = await axios.get("http://localhost:4000/restaurants/" + restaurantName);
      return response.data.restaurants_list;
    } catch (error) {
      //We're not handling errors. Just logging into the console.
      console.log(error);
      return false;
    }
  }

  useEffect(() => {
    fetchRestaurant().then((result) => {
      if (result) setRestaurant(result[0]);
    });
  }, []);
  */

  function TableBody() {
    //const rest = restaurant[0];
    console.log("MENU TEST");
    //console.log(props.rest);
    // console.log(restaurant[0]);
    if (props.rest) {
      const eles = props.rest["menuitems"].reduce((accumulator, item) => {
        const menuItem = props.menu.filter((temp) => {
          return temp._id.toString() === item;
        })[0];

        if (
          menuItem &&
          menuItem.name
            .toLowerCase()
            .includes(props.searchMenuInput.toLowerCase())
        ) {
          accumulator.push(
            <div key={item} class="col-auto mb-3">
              <div class="card" style={{ width: "18rem" }}>
                <div class="card-body">
                  <h5 class="card-title">{menuItem.name}</h5>
                  {/* <h6 class="card-subtitle mb-2 text-muted">{menuItem.price}</h6> */}
                  {/* <p class="card-text">{menuItem.description}</p> */}
                </div>
              </div>
            </div>
          );
        }

        return accumulator;
      }, []);

      return (
        <div>
          <div class="row">{eles}</div>
        </div>
      );
    }
  }
  return <TableBody />;
}
export default RestaurantMenu;
