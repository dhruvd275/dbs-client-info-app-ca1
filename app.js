const express = require("express");
const app = express();
const { Sequelize } = require("sequelize");

// Basic health route
app.get("/", (req, res) => {
  res.send("Client Info App - Running Successfully!");
});

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
