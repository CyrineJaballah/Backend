require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const baladeRoutes = require("./routes/balades");

const app = express();
const cors = require("cors");

//middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//connect to db
mongoose
  .connect(process.env.MONGO_UI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("connected to db & Listening on port", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });

//listen for request

app.use("/api/zrayeb", baladeRoutes);
