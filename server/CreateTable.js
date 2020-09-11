var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "toor",
  database: "jewDB"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY ,username VARCHAR(30), password VARCHAR(20), name VARCHAR(30), surname VARCHAR(30))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});


