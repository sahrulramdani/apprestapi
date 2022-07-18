"use strict";

const response = require("./res");
const connection = require("./connection");

exports.index = function (req, res) {
  response.ok("Aplikasi API Telah Berjalan", res);
};

exports.tampilMahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", function (error, rows, field) {
    if (error) {
      console.log(error);
    } else {
      response.ok(rows, res);
    }
  });
};

exports.detailMahasiswa = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id = ?",
    [id],
    function (error, rows, field) {
      if (error) {
        console.log(error);
      } else {
        response.ok(rows, res);
      }
    }
  );
};
