const mongoose = require("mongoose");
const RestaurantSchema = require("./schemas").RestaurantSchema;
const ReviewSchema = require("./schemas").ReviewSchema;
const MenuItemSchema = require("./schemas").MenuItemSchema;

require("dotenv").config();

let dbConnection;

function setConnection(newConn) {
  dbConnection = newConn;
  return dbConnection;
}

function getDbConnection() {
  if (!dbConnection) {
    dbConnection = mongoose.createConnection(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  }
  return dbConnection;
}

async function getRestaurants(name) {
  const restaurantModel = getDbConnection().model(
    "Restaurant",
    RestaurantSchema
  );
  let result;
  if (name === undefined) {
    result = await restaurantModel.find();
  } else if (name) {
    result = await findRestaurantByName(name);
  }
  return result;
}

async function findRestaurantById(id) {
  const restaurantModel = getDbConnection().model(
    "Restaurant",
    RestaurantSchema
  );
  try {
    return await restaurantModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function findRestaurantByName(name) {
  const restaurantModel = getDbConnection().model(
    "Restaurant",
    RestaurantSchema
  );
  try {
    return await restaurantModel.find({ name: name });
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addRestaurant(restaurant) {
  const restaurantModel = getDbConnection().model(
    "Restaurant",
    RestaurantSchema
  );
  try {
    // You can use a Model to create new documents using 'new' and
    // passing the JSON content of the Document:
    const restaurantToAdd = new restaurantModel(restaurant);
    const savedRestaurant = await restaurantToAdd.save();
    return savedRestaurant;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function getReviews() {
  const reviewModel = getDbConnection().model("Review", ReviewSchema);
  let result;
  result = await reviewModel.find();
  return result;
}

async function findReviewById(id) {
  const reviewModel = getDbConnection().model("Review", ReviewSchema);
  try {
    return await reviewModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addReview(review) {
  const reviewModel = getDbConnection().model("Review", ReviewSchema);
  try {
    // You can use a Model to create new documents using 'new' and
    // passing the JSON content of the Document:
    const reviewToAdd = new reviewModel(review);
    const savedReview = await reviewToAdd.save();
    return savedReview;
  } catch (error) {
    console.log(error);
    return false;
  }
}

async function getMenuItems(name) {
  const menuModel = getDbConnection().model("MenuItem", MenuItemSchema);
  let result;
  if (name === undefined) {
    result = await menuModel.find();
  } else if (name) {
    result = await findMenuItemByName(name);
  }
  return result;
}

async function findMenuItemByName(name) {
  const menuModel = getDbConnection().model("MenuItem", MenuItemSchema);
  return await menuModel.find({ name: name });
}

async function findMenuItemById(id) {
  const menuModel = getDbConnection().model("MenuItem", MenuItemSchema);
  try {
    return await menuModel.findById(id);
  } catch (error) {
    console.log(error);
    return undefined;
  }
}

async function addMenuItem(menuitem) {
  const menuModel = getDbConnection().model("MenuItem", MenuItemSchema);
  try {
    // You can use a Model to create new documents using 'new' and
    // passing the JSON content of the Document:
    const menuItemToAdd = new menuModel(menuitem);
    const savedMenuItem = await menuItemToAdd.save();
    return savedMenuItem;
  } catch (error) {
    console.log(error);
    return false;
  }
}

exports.getRestaurants = getRestaurants;
exports.findRestaurantById = findRestaurantById;
exports.findRestaurantByName = findRestaurantByName;
exports.addRestaurant = addRestaurant;
exports.getReviews = getReviews;
exports.findReviewById = findReviewById;
exports.addReview = addReview;
exports.getMenuItems = getMenuItems;
exports.findMenuItemById = findMenuItemById;
exports.addMenuItem = addMenuItem;
exports.setConnection = setConnection;
exports.findMenuItemByName = findMenuItemByName;
