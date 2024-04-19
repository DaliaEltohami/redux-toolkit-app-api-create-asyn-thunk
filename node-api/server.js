require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hiiiiiiiiii");
});

app.post("/api/users", (req, res) => {
  setTimeout(() => {
    res.send(req.body);
  }, 1500);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server Running on Port 5000");
});

console.log(process.env.PORT);
