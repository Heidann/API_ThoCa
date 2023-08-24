import connection from "../configs/connectDB";

let getHomePage = (req, res) => {
  //logic
  let data = [];
  connection.query(
    "SELECT * FROM `customer` ",
    function (err, results, fields) {
      results.map((row) => {
        data.push({
          // id: row.id,
          // email: row.email,
          // address: row.address,
          // firstName: row.firstName,
          // lastName: row.lastName,

          // Tho Ca
          id: row.CusID,
          name: row.CusName,
          address: row.CusAddress,
          phone: row.CusPhone,
          // mail: row.CusMail,
          // code: row.IdentifyCode,
          // pass: row.Pass,
        });
      });

      return res.render("index.ejs", {
        dataUser: data,
        test: "abc string test",
      });
    }
  );
};

module.exports = {
  getHomePage,
};
