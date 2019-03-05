const express = require("express");
const app = express();
const parser = require("body-parser");

app.use(
  parser.urlencoded({
    extended: true
  })
);

app.set("view engine", "hbs");

app.use(require("./routes/index"));

app.set("port", process.env.PORT || 3001);

app.listen(app.get("port"), () => {});
