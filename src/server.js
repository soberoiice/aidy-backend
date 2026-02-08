require("dns").setDefaultResultOrder("ipv4first");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// console.log("ENV CHECK:", process.env.MONGO_URI);

// Import routes
const userRoutes = require("./routes/userRoutes");
// const studyMaterialRoutes = require("./routes/studyMaterialRoutes");

app.use("/api/users", userRoutes);
// app.use("/api/materials", studyMaterialRoutes);

mongoose.connection.on("connected", () => {
  console.log("MongoDB is ready");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB is ready");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("MongoDB FAILED:", err.message);
  });

