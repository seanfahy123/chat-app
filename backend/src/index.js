const app = require("./app");
const expressport = process.env.EXPRESS_PORT;

app.listen(expressport, () => {
  console.log(`Express server is up on port ${expressport}`);
});
