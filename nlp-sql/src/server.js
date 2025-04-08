const express = require("express");
const collection = require("./mongo"); // Ensure you have a correct MongoDB collection
const cors = require("cors");
const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use(cors());

// Route for login
server.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    // Check if user exists and password matches
    if (user) {
      if (user.password === password) {
        res.json("exist"); // User exists and password matches
      } else {
        res.json("wrongpassword"); // Password does not match
      }
    } else {
      res.json("notexist"); // User does not exist
    }
  } catch (e) {
    console.error(e); // Log error for debugging
    res.status(500).json("error"); // Return error with a proper status code
  }
});

// Route for signup
server.post("/signup", async (req, res) => {
  const { email, password } = req.body;
  const data = {
    email: email,
    password: password, // In a real application, hash the password!
  };

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      res.json("exist"); // User already exists
    } else {
      await collection.insertOne(data); // Insert a single user document
      res.json("notexist"); // User created successfully
    }
  } catch (e) {
    console.error(e); // Log error for debugging
    res.status(500).json("error"); // Return error with a proper status code
  }
});

// Start the server
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});
