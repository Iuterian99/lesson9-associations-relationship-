const express = require("express");
const app = express();
const router = require("./routes/routes");
const { sequelize } = require("./models/model");
app.use(express.json());

sequelize
  .sync({ force: false })
  .then(() => console.log("Connected"))
  .catch((err) => console.log(err));

app.use(router);

app.listen(9000, console.log(9000));
