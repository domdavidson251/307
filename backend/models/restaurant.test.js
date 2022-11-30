const mongoose = require("mongoose");
const RestaurantSchema = require("./schemas").RestaurantSchema;
const ReviewSchema = require("./schemas").ReviewSchema;
const services = require("./schema-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

// based on Prof's example here:
// https://github.com/bcdasilv/expressjs-with-mongoose/blob/tests-in-memory-db/restaurantModels/user-services.test.js

let mongoServer;
let conn;
let restaurantModel;
let reviewModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = mongoose.createConnection(uri, mongooseOpts);

  restaurantModel = conn.model("Restaurant", RestaurantSchema);
  reviewModel = conn.model("Review", ReviewSchema);

  services.setConnection(conn);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyReview = {
    stars: 5,
    review: "Great",
    date: "October 5, 2021",
    author: "Bob",
    upvotes: 0,
    downvotes: 4,
  };
  let result = new reviewModel(dummyReview);
  await result.save();

  dummyReview = {
    stars: 1,
    review: "bad",
    date: "July 10, 2004",
    author: "Author",
    upvotes: 10,
    downvotes: 0,
  };
  result = new reviewModel(dummyReview);
  await result.save();

  let dummyRes = {
    name: "Hearth",
    reviews: ["63866b65a3e5d738b6b149b7"],
  };
  result = new restaurantModel(dummyRes);
  await result.save();
});

test("testing getRestaurants()", async () => {
  const res = await services.getRestaurants("Hearth");
  expect(res[0].name).toBe("Hearth");
  expect(res[0].reviews.length).toBe(1);
});

test("testing findRestaurantById()", async () => {
  const res = await services.findRestaurantById("63866c07c4bb070dc5043af4");
  expect(res).toBe(null);
});

test("testing findRestaurantByName()", async () => {
  const res = await services.findRestaurantByName("Hearth");
  expect(res[0].name).toBe("Hearth");
  expect(res[0].reviews.length).toBe(1);
});

test("testing addRestaurant()", async () => {
  const newRes = {
    name: "Streats",
    reviews: ["63866b65a3e5d738b6b149b7"],
  };

  const res = await services.addRestaurant(newRes);
  expect(res.name).toBe("Streats");
  expect(res.reviews.length).toBe(1);
});
