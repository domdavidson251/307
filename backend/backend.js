const express = require("express");
const cors = require("cors");

const services = require("./models/schema-services");

const app = express();
const port = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/restaurants", async (req, res) => {
  const name = req.query["name"];
  try {
    const result = await services.getRestaurants(name);
    res.send({ restaurants_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server");
  }
});

// app.get("/restaurants/:id", async (req, res) => {
//   const id = req.params["id"];
//   const result = await services.findRestaurantById(id);
//   if (result === undefined || result === null) {
//     res.status(404).send("Resource not found.");
//   } else {
//     res.send({ restaurants_list: result });
//   }
// });

app.get("/restaurants/:name", async (req, res) => {
  const name = req.params["name"];
  const result = await services.findRestaurantByName(name);
  if (result === undefined || result === null) {
    res.status(404).send("Resource not found.");
  } else {
    res.send({ restaurants_list: result });
  }
});

app.post("/restaurants", async (req, res) => {
  const restaurant = req.body;
  const savedRestaurant = await services.addRestaurant(restaurant);
  if (savedRestaurant) {
    res.status(201).send(savedRestaurant);
  } else {
    res.status(500).end();
  }
});

app.patch("/restaurants/:name", async (req, res) => {
  console.log(req.body);
  const name = req.params["name"];
  const temp = await services.findRestaurantByName(name);
  const origRes = temp[0];
  let modifiedRes = origRes;
  modifiedRes.reviews.push(req.body._id);
  const result = await modifiedRes.save();
  res.send(result);
});

app.get("/reviews", async (req, res) => {
  try {
    const result = await services.getReviews();
    res.send({ reviews_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server");
  }
});

app.get("/reviews/:id", async (req, res) => {
  const id = req.params["id"];
  const result = await services.findReviewById(id);
  if (result === undefined || result === null) {
    res.status(404).send("Resource not found.");
  } else {
    res.send({ reviews_list: result });
  }
});

app.post("/reviews", async (req, res) => {
  const review = req.body;
  const savedReview = await services.addReview(review);
  console.log(savedReview);
  if (savedReview) {
    res.status(201).send(savedReview);
  } else {
    res.status(500).end();
  }
});

app.get("/menu", async (req, res) => {
  const name = req.query["name"];
  try {
    const result = await services.getMenuItems(name);
    res.send({ menuitems_list: result });
  } catch (error) {
    console.log(error);
    res.status(500).send("An error ocurred in the server");
  }
});

app.get("/menu/:id", async (req, res) => {
  const id = req.params["id"];
  const result = await services.findMenuItemById(id);
  if (result === undefined || result === null) {
    res.status(404).send("Resource not found.");
  } else {
    res.send({ menuitems_list: result });
  }
});

app.post("/menu", async (req, res) => {
  const menuitem = req.body;
  const savedMenuItem = await services.addMenuItem(menuitem);
  if (savedMenuItem) {
    res.status(201).send(savedMenuItem);
  } else {
    res.status(500).end();
  }
});

app.listen(process.env.PORT || port, () => {
  console.log("Rest API is listening.");
});
