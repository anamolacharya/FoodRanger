"use strict";
module.exports = function (app) {
  var foodRanger = require("../controllers/foodRangerController");

  // Food Ranger Routes
  app
    .route("/resturants")

    .get(foodRanger.list_all_resturants)
    .post(foodRanger.create_a_resturant);

  app
    .route("/resturants/:resturantId")

    .get(foodRanger.read_a_resturant)
    .put(foodRanger.update_a_resturant)
    .delete(foodRanger.delete_a_resturant);

  app
    .route("/resturant/review")
    .get(foodRanger.list_all_reviews)
    .post(foodRanger.post_a_review);

  app
    .route("/resturant/review/:resturantId")

    //.get(foodRanger.list_all_reviews)
    .get(foodRanger.list_reviews);

  // app.route("/resturant/review/:reviewId").delete(foodRanger.delete_a_review);

  app.route("/auth/register").post(foodRanger.register_a_user);
  app.route("/auth/login").post(foodRanger.login_a_user);

  //app.route("/users/:userId").get(foodRanger.get_user_info);
};
