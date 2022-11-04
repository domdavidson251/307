const mongoose = require("mongoose");
const ReviewSchema = require("./schemas").ReviewSchema;
const services = require("./schema-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

// based on Prof's example here:
// https://github.com/bcdasilv/expressjs-with-mongoose/blob/tests-in-memory-db/models/user-services.test.js

let conn;
let reviewModel;
let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = mongoose.createConnection(uri, mongooseOpts);

  reviewModel = conn.model("Review", ReviewSchema);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyReview = {
    stars: 5,
    review: "This place is amazing!!!",
    author: "no u",
  };
  let result = new reviewModel(dummyReview);
  await result.save();
});

afterEach(async () => {});

test("first test", async () => {
  console.log("doing test yo");

  expect(services.getReviews()).toBe({});
});
