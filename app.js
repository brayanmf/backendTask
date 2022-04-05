const express = require("express");
const task = require("./api/task");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/tasks", task);

module.exports = app;
