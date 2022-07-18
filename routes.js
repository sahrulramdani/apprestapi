"use strict";

module.exports = function (app) {
  const controller = require("./controller");

  app.route("/").get(controller.index);

  app.route("/tampil").get(controller.tampilMahasiswa);

  app.route("/tampil/:id").get(controller.detailMahasiswa);
};
