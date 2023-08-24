import mysql from "mysql2";

// create the connection to database
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "thoca",
  password: "phhaidann@gmail.com",
});

// simple query
connection.query("SELECT * FROM `handyman` ", function (err, results, fields) {
  console.log(">>> check mysql");
  console.log(results); // results contains rows returned by server

  let rows = results.map((row) => {
    return row;
  });
  console.log(rows); // results contains rows returned by server

  // console.log(fields); // results contains rows returned by server
});

export default connection;
