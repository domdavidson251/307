import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/style.css";

function RestaurantMenu(props) {
  function TableBody() {
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
            <div key={item} className="col-auto mb-3">
              <div className="card-body" style={{ width: "18rem" }}>
                <div className="card-body">
                  <h5 className="card-title">{menuItem.name}</h5>
                  {/* <h6 className="card-subtitle mb-2 text-muted">{menuItem.price}</h6> */}
                  {/* <p className="card-text">{menuItem.description}</p> */}
                </div>
              </div>
            </div>
          );
        }

        return accumulator;
      }, []);

      return (
        <div>
          <div className="row">{eles}</div>
        </div>
      );
    }
  }
  return <TableBody />;
}
export default RestaurantMenu;
