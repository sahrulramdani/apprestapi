const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const routes = require("./routes.js");

//Parse application
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Memanggil Routes
routes(app);

// Server Connection
app.listen(3000, () => {
  console.log(`Server started on port`);
});
