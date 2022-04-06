const { Branches } = require("../models/model");
module.exports = {
  GET: async (_, res) => {
    try {
      res.send("Branches");
    } catch (err) {
      res.sendStatus(500);
    }
  },
  POST: async (req, res) => {
    try {
      const { name, restaurantId } = req.body;
      const newBranch = await Branches.create({ name, restaurantId });
      res.send(newBranch);
    } catch (err) {
      res.sendStatus(500);
    }
  },
};
