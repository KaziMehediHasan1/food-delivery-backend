const express = require("express");
const cors = require("cors");
require("dotenv").config();
const bodyParser = require("body-parser");
const app = express();
const ConnectDB = require("./src/config/db");
const UserRoute = require("./src/routes/UserRoute");
const ShopCreatorRoute = require("./src/routes/ShopCreatorRoute");
const ShopProductRoute = require("./src/routes/ShopProductRoute");
const reastaurantRoute = require("./src/routes/restaurantRoute");
const foodRoute = require("./src/routes/foodRoute");
const PORT = process.env.SERVER_PORT || 5000;
// middlerware
app.use(express.json());
app.use(bodyParser.json());
app.use(cors());

// database connected
ConnectDB();

// sign jwt
app.use("/jwt", async (req, res) => {
  res.cookie("name", "mehedi");
  const user = req.body;
  const token = jwt.sign(user, process.env.JWT_SECRET_TOKEN, {
    expiresIn: "1h",
  });
});

// run db
app.get("/", (req, res) => {
  res.status(200).send({
    message: "Mongodb api in running",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});

app.use("/", UserRoute);
app.use("/", ShopCreatorRoute);
app.use("/", ShopProductRoute);
app.use("/", reastaurantRoute);
app.use("/", foodRoute);
module.exports = app;
