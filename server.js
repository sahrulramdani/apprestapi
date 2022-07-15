const bodyParser = require("body-parser");
const express = require("express");
const app = express();

//Parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Server Connection
app.listen(3000, () => {
  console.log(`Server started on port`);
});
