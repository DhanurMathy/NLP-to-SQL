const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const User = require("./src/mongo"); // Ensure this file exports a Mongoose model

const server = express();
server.use(express.json());
server.use(cors());

// Login route
server.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.json("exist");
      } else {
        res.json("wrongpassword");
      }
    } else {
      res.json("notexist");
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("error");
  }
});

// Signup route
server.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      res.json("exist");
    } else {
      const hashedPassword = await bcrypt.hash(password, 10);
      await User.create({ email, password: hashedPassword });
      res.json("notexist");
    }
  } catch (e) {
    console.error(e);
    res.status(500).json("error");
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
