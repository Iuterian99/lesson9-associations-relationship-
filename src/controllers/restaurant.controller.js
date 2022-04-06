const { Restaurants, Branches } = require("../models/model");
module.exports = {
  GET: async (_, res) => {
    try {
      res.send(
        await Restaurants.findAll({
          include: Branches,
        })
      );
    } catch (err) {
      res.sendStatus(500);
    }
  },
  POST: async (req, res) => {
    try {
      const { name } = req.body;
      const newRestaurant = await Restaurants.create({ name });
      res.send(newRestaurant);
    } catch (err) {
      res.sendStatus(500);
    }
  },
};
