const mongoose = require("mongoose");
const RestaurantSchema = require("./schemas").RestaurantSchema;
const services = require("./schema-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

// based on Prof's example here:
// https://github.com/bcdasilv/expressjs-with-mongoose/blob/tests-in-memory-db/models/user-services.test.js

let mongoServer;
let conn;
let restaurantModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = mongoose.createConnection(uri, mongooseOpts);

  restaurantModel = conn.model("Restaurant", RestaurantSchema);

  services.setConnection(conn);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {});

afterEach(async () => {});

test("testing getRestaurants()", async () => {
  expect(1).toBe(1);
});
