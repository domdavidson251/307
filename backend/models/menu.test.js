const mongoose = require("mongoose");
const MenuItemSchema = require("./schemas").MenuItemSchema;
const services = require("./schema-services");
const { MongoMemoryServer } = require("mongodb-memory-server");

// based on Prof's example here:
// https://github.com/bcdasilv/expressjs-with-mongoose/blob/tests-in-memory-db/models/user-services.test.js

let mongoServer;
let conn;
let model;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();

  const mongooseOpts = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  conn = mongoose.createConnection(uri, mongooseOpts);

  model = conn.model("Menu", MenuItemSchema);

  services.setConnection(conn);
});

afterAll(async () => {
  await conn.dropDatabase();
  await conn.close();
  await mongoServer.stop();
});

beforeEach(async () => {
  let dummyMenuItem = {
    name: "Bacon",
    restaurant: "6372c82a12619fba45a8e36f",
  };

  let result = new model(dummyMenuItem);
  await result.save();
});

afterEach(async () => {
  await model.deleteMany({});
});

test("testing findMenuItemByName()", async () => {
  const res = await services.findMenuItemByName("Bacon");
  expect(res[0].name).toBe("Bacon");
});

test("testing findMenuItemById()", async () => {
  const res = await services.findMenuItemById("638665fff7c9108bee47f224");
  expect(res).toBe(null);
});

test("testing getMenuItems()", async () => {
  const res = await services.getMenuItems("Bacon");
  expect(res[0].name).toBe("Bacon");
});

test("testing addMenuItem()", async () => {
  const newItem = {
    name: "Pizza",
    Restaurant: "638665fff7c9108bee47f224",
  };

  const res = await services.addMenuItem(newItem);
  expect(res.name).toBe("Pizza");
});
