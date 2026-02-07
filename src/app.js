const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/auth.routes"));
app.use("/materials", require("./routes/material.routes"));
app.use("/ai", require("./routes/ai.routes"));

module.exports = app;
