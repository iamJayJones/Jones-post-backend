const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config() 

app.use("/", (req, res) => {
  console.log();
});

app.listen("2222", () => {
  console.log("Backend is running");
});
