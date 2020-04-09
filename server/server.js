const path = require("path");
const express = require("express");

const publicPath = path.resolve("../public");

const app = express();
app.use(express.static(publicPath));

app.set("port", process.env.port || 8080);
app.listen(app.get("port"), () => {
  console.log(`Listening on port: ${app.get("port")}`);
});
