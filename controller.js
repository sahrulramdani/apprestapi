"use strict";

const response = require("./res");
const connection = require("./connection");

exports.index = function (req, res) {
  response.ok("Aplikasi API Telah Berjalan", res);
};
