const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const bookRoutes = require("./routes/bookRoutes");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173"
  })
);

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "Book Explorer API is running"
  });
});

app.use("/api/books", bookRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Route not found"
  });
});

module.exports = app;