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

// menambahkan data mahasiswa
exports.tambahMahawiswa = function (req, res) {
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query(
    "INSERT INTO mahasiswa (nim, nama, jurusan) VALUES (?,?,?)",
    [nim, nama, jurusan],
    (err, rows, fields) => {
      if (err) throw err;
      response.ok("Data mahasiswa berhasil ditambahkan", res);
    }
  );
};

// mengubah data berdasarkan ID
exports.updateMahasiswa = function (req, res) {
  let id = req.body.id_mahasiswa;
  let nim = req.body.nim;
  let nama = req.body.nama;
  let jurusan = req.body.jurusan;

  connection.query(
    "UPDATE mahasiswa SET nim =?, nama =?, jurusan =? WHERE id_mahasiswa=?",
    [nim, nama, jurusan, id],
    (err, rows, fields) => {
      if (err) throw err;
      response.ok("Data mahasiswa berhasil diubah", res);
    }
  );
};
