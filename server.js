const express = require("express");
const cors = require("cors");
const app = express();
const jwt = require("jsonwebtoken");
const { ConnectDB } = require("./src/config/db");
const PORT = process.env.SERVER_PORT || 5000;
// middlerware
app.use(express.json());
app.use(cors());
// database connected
ConnectDB();

// sign jwt
app.use("/jwt", async (req, res) => {
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
