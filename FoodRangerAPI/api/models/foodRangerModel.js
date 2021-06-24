"use strict";
//This part of code is used to make a CRUD operation for resturant
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//Database
//Collection(s)
//Collection -> Document(s)
//Document -> JSON like -> key value

//Mongoose -> sits on top of mongodb native driver (mongodb) -> richer DX(developer experience)

var TaskSchema = new Schema({
  name: {
    type: String,
    required: "Kindly enter the name of the resturant",
  },
  food_type: {
    type: Array,
  },

  resturant_type: {
    type: Array,
  },
  hour: {
    open: { String },
    close: { String },
  },
  menu: {
    name: { String },
    unit_price: { Number },
    item_type: { String },
  },
  features: {
    wifi: { Boolean },
    ac: { Boolean },
    delivery: { Boolean },
  },
  social: {
    type: String,
  },
  location: {
    location_type: { String },
    coordinates: [Number],
  },

  status: {
    type: [
      {
        type: String,
        enum: ["pending", "ongoing", "completed"],
      },
    ],
    default: ["pending"],
  },
});

module.exports = mongoose.model("Resturants", TaskSchema);

//This part of code is used to create the objects for the reviews to the resutrant
var ReviewSchema = mongoose.Schema;
var RSchema = new ReviewSchema({
  review: {
    resturant_name: [String],
    service: [Number],
    food: [Number],
    environment: [Number],
    price: [Number],
    comment: [String],
  },
});

module.exports = mongoose.model("Reviews", RSchema);

// This line of code is use to Register, login and get user info
//we can use bcryot to create the hash
var UserSchema = new mongoose.Schema({
  fName: { type: String },
  lName: { type: String },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

module.exports = mongoose.model("Users", UserSchema);

// var LoginUserSchema = new mongoose.Schema({
//   email: { type: String, required: true },
//   password: { type: String, required: true },
// });
// module.exports = mongoose.model("LoginUsers", LoginUserSchema);

/*
 review: {
    type: String,
    required: "Kindly enter the review of the resturant",
  },
  food: {
    type: Number,
    required: "Please rate the resturant from 1-5",
  },
  service: {
    type: Number,
    required: "Please rate the resturant from 1-5",
  },
  environment: {
    type: Number,
    required: "Please rate the resturant from 1-5",
  },
  price: {
    type: Number,
    required: "Please rate the resturant from 1-5",
  },

  
:



*/
