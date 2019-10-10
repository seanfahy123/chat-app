const request = require("supertest");
const app = require("../app");
const Message = require("../models/message");

const testMessage = {
  sender: "testUser",
  message: "This is a test message for development purposes only",
  room: "testRoom"
};

beforeAll(async () => {
  await Message.deleteMany({ room: testMessage.room });
});

test("Can connect to server", async () => {
  await request(app)
    .get("/")
    .send()
    .expect(200);
});

test("Should add a new message", async () => {
  await request(app)
    .post("/messages")
    .send(testMessage)
    .expect(201);
});
