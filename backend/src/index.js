const app = require("./app");

app.listen(process.env.PORT || process.env.EXPRESS_PORT, () => {
  console.log(`Express server is up`);
});
