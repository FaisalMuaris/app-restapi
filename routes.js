"use strict";

module.exports = function (app) {
  let jsonKu = require("./controller");

  app.route("/").get(jsonKu.index);
  app.route("/mahasiswa").get(jsonKu.tampilMahasiswa);
  app.route("/mahasiswa/:id").get(jsonKu.detailMahasiswa);
};
