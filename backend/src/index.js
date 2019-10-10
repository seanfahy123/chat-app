require("dotenv").config();

const app = require("./app");

app.listen(process.env.PORT || process.env.EXPRESS_PORT, "0.0.0.0");
