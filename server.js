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

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks', {
  useCreateIndex: true,
  useNewUrlParser: true,
});

app.listen(PORT, function () {
  console.log(`Currently listening on Port:${PORT}`);
});
