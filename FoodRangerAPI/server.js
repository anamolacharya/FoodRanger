/*
var express = require("express"),
  app = express(),
  port = process.env.PORT || 3000;

app.listen(port);

console.log("Food Ranger RESTful API server started on: " + port);
*/

require("dotenv").config();

var express = require("express"),
  app = express(),
  port = process.env.PORT || 4000,
  mongoose = require("mongoose"),
  Resturant = require("./api/models/foodRangerModel"),
  //User = require("./api/models/userModel"),
  //created model loading here
  bodyParser = require("body-parser");

const cors = require("cors");
app.use(cors());

//to access the user model in the server we need to import the userModel first
// const User = require("./api/models/userModel");
// console.log("User from Mongoose => ", mongoose.model("UserModel"));

//  mongoose instance connection url connection

mongoose.Promise = global.Promise;

let key = process.env.KEY;

mongoose
  .connect(key, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB Connected...");
  });

//mongoose.connect("mongodb://127.0.0.1:27017/");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./api/routes/foodRangerRoutes"); //importing route
routes(app); //register the route

app.listen(port);

console.log("Food Ranger RESTful API server started on: " + port);
