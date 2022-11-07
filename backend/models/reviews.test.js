const mongoose = require("mongoose");
const ReviewSchema = require("./schemas").ReviewSchema;
const services = require("./schema-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

// based on Prof's example here:
// https://github.com/bcdasilv/expressjs-with-mongoose/blob/tests-in-memory-db/models/user-services.test.js

let mongoServer;
let conn;
let reviewModel;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = mongoose.createConnection(uri, mongooseOpts);

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
    review: "This place is amazing!",
    date: "October 5, 2021",
    author: "Bob",
    upvotes: 0,
    downvotes: 4,
  };
  let result = new reviewModel(dummyReview);
  await result.save();

  let dummyReview2 = {
    stars: 5,
    review: "DECENT",
    date: "July 10, 2004",
    author: "Bubbles",
    upvotes: 10,
    downvotes: 0,
  };
  let result2 = new reviewModel(dummyReview2);
  await result2.save();
});

afterEach(async () => {
  reviewModel.deleteMany();
});

test("testing getReviews()", async () => {
  const reviews = await services.getReviews();

  console.log(reviews);

  expect(reviews.length).toBe(2);
  expect(reviews[0].author).toBe("Bob");
  expect(reviews[1].author).toBe("Bubbles");
  expect(reviews[1].stars).toBe(5);
  expect(reviews[1].review).toBe("DECENT");
});

<<<<<<< HEAD
test("testing findReviewById()", async () => {
  const anyId = "123";
  const review = await services.findReviewById(anyId);
  expect(review).toBeUndefined();
=======
  expect(1).toBe(1);
>>>>>>> 37385b50d0f44e45e3703ed139f5fa73b57bb1ac
});

// test("testing addReview()", async () => {
//   let dummyReview = {
//     stars: 0,
//     review: ":(",
//     date: "October 31, 1924",
//     author: "J",
//     upvotes: 3,
//     downvotes: 2,
//   };

//   services.addReview(dummyReview);
// });
