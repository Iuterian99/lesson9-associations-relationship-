const express = require("express");
const router = express.Router();

const RestaurantController = require("../controllers/restaurant.controller");
const BranchController = require("../controllers/branches.controller");

router
  .get("/restaurants", RestaurantController.GET)
  .post("/restaurants", RestaurantController.POST)
  .get("/branches", BranchController.GET)
  .post("/branches", BranchController.POST);

module.exports = router;
