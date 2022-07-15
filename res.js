// Fungsinya untuk mengetahui apakah semua proses berjalan dengan baik

"use strict";

exports.ok = function (values, res) {
  let data = {
    status: 200,
    values: values,
  };

  res.json(data);
  res.end();
};
