"use strict";

let response = require("./res");
let connection = require("./koneksi");

exports.index = function (res, req) {
  response.ok("Aplikasi Rest Api ku berjalan");
};
