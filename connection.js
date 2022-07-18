const mysql = require("mysql");

//Membuat Koneksi Database
const conn = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "dbrestapi",
});

conn.connect((err) => {
  if (err) throw err;
  console.log("Berhasil Terkoneksi");
});

module.exports = conn;
