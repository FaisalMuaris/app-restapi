"use strict";

let response = require("./res");
let connection = require("./koneksi");

exports.index = function (req, res) {
  response.ok("Aplikasi Rest Api ku berjalan", res);
};

// menampilkan semua data mahasiswa
exports.tampilMahasiswa = function (req, res) {
  connection.query("SELECT * FROM mahasiswa", (err, rows, fields) => {
    if (err) throw err;
    response.ok(rows, res);
  });
};

// menampilkan data mahasiswa berdasarkan ID
exports.detailMahasiswa = function (req, res) {
  let id = req.params.id;
  connection.query(
    "SELECT * FROM mahasiswa WHERE id_mahasiswa = ?",
    [id],
    (err, rows, fields) => {
      if (err) throw err;
      response.ok(rows, res);
    }
  );
};
