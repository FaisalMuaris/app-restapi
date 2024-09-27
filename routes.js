"use strict";

module.exports = function (app) {
  let jsonKu = require("./controller");

  app.route("/").get(jsonKu.index);
};
