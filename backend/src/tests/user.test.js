const request = require("supertest");
const app = require("../app");
const User = require("../models/user");

const testUser = {
  username: "John",
  email: "john@example.com",
  password: "testtest1234"
};

beforeAll(async () => {
  await User.deleteMany();
});

test("Can connect to server", async () => {
  await request(app)
    .get("/")
    .send()
    .expect(200);
});

test("Should signup a new user", async () => {
  await request(app)
    .post("/users")
    .send(testUser)
    .expect(201);
});

test("Can request a user's info", async () => {
  await request(app)
    .get(`/users/${testUser.username}`)
    .send()
    .expect(200);
});
