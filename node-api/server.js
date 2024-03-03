const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/users", (req, res) => {
  setTimeout(() => {
    res.send(req.body);
  }, 1500);
});

app.listen("5000", () => {
  console.log("Server Running on Port 5000");
});
