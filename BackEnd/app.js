const express = require("express");
const app = express();

const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/preeti";
const router=require('./router/router')

mongoose
  .connect(url)
  .then(() => console.log("datbase connected!"))
  .catch((err) => {
    err;
  });

app.use(express.json());

app.use("/", router);

let port = 6767;
app.listen(port, function () {
  `Server is running in the port ${port}`;
});
