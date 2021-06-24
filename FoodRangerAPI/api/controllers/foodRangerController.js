"use strict";
//This is the initialization of mongoose and review that is goingg to be used in export the opeartion for Review and Resturant
var mongoose = require("mongoose"),
  Resturant = mongoose.model("Resturants");

var mongoose = require("mongoose"),
  Review = mongoose.model("Reviews");

var mongoose = require("mongoose"),
  User = mongoose.model("Users");

// var mongoose = require("mongoose"),
//   LoginUser = mongoose.model("LoginUsers");

exports.list_all_resturants = function (req, res) {
  Resturant.find({}, function (err, resturant) {
    if (err) res.send(err);
    res.json(resturant);
  });
};

exports.create_a_resturant = function (req, res) {
  var new_resturant = new Resturant(req.body);
  new_resturant.save(function (err, resturant) {
    if (err) res.send(err);
    res.json(resturant);
  });
};

exports.read_a_resturant = function (req, res) {
  Resturant.findById(req.params.resturantId, function (err, resturant) {
    if (err) res.send(err);
    res.json(resturant);
  });
};

exports.update_a_resturant = function (req, res) {
  Resturant.findOneAndUpdate(
    { _id: req.params.resturantId },
    req.body,
    { new: true },
    function (err, resturant) {
      if (err) res.send(err);
      res.json(resturant);
    }
  );
};

exports.delete_a_resturant = function (req, res) {
  Resturant.remove(
    {
      _id: req.params.resturantId,
    },
    function (err, resturant) {
      if (err) res.send(err);
      res.json({ message: "Task successfully deleted" });
    }
  );
};

exports.post_a_review = function (req, res) {
  var new_review = new Review(req.body);
  new_review.save(function (err, review) {
    if (err) res.send(err);
    res.json(review);
  });
};

exports.list_all_reviews = function (req, res) {
  Review.find({}, function (err, review) {
    if (err) res.send(err);
    res.json(review);
  });
};

// exports.read_a_resturant = function (req, res) {
//   Resturant.findById(req.params.resturantId, function (err, resturant) {
//     if (err) res.send(err);
//     res.json(resturant);
//   });
// };

exports.list_reviews = function (req, res) {
  Review.findById(req.params.resturantId, function (err, review) {
    if (err) res.send(err);
    res.json(review);
  });
};

exports.register_a_user = function (req, res) {
  var new_user = new User(req.body);
  new_user.save(function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};

//const history = useHistory();
exports.login_a_user = async function (req, res) {
  // var new_LoginUser = new LoginUser(req.body);
  // new_LoginUser.save(function (err, user) {
  //   if (err) res.send(err);
  //   res.json(user);
  // });

  const { email, password } = req.body;
  let result = await User.findOne({ email });
  if (result) {
    if (result.password == password) {
      res.status(200).send({
        message: "Successful Login!",
      });
      //history.push("/");
    } else {
      res.status(200).send({
        message: "Password incorrect!",
      });
    }
  } else {
    res.status(200).send({
      message: "User not found!",
    });
  }
};

// exports.read_a_resturant = function (req, res) {
//   Resturant.findById(req.params.resturantId, function (err, resturant) {
//     if (err) res.send(err);
//     res.json(resturant);
//   });
// };

exports.get_user_info = function (req, res) {
  User.findById(req.params.userId, function (err, user) {
    if (err) res.send(err);
    res.json(user);
  });
};
