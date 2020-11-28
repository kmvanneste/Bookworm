const express = require("express");

const mongoose = require("mongoose");

const app = express();
const routes = require("./routes");
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

mongoose.connect(
    "mongodb://127.0.0.1:27017/googlebooks",
    { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true}).then(db => {
      console.log("Database connected");
    }).catch(error => console.log("Could not connect to mongo db " + error));

app.listen(PORT, function () {
  console.log(`Currently listening on Port:${PORT}`);
});
