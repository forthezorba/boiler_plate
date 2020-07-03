var express = require("express");
var app = express();
const port = 5000;
const mongoose = require("mongoose");

mongoose
  .connect('mongodb+srv://admin:blbjzTqnthPYhRuf@movynoty-qbkn2.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((e) => {
    console.error(e);
  });
// respond with "hello world" when a GET request is made to the homepage
app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(port, () => console.log(`listening ${port}`));
