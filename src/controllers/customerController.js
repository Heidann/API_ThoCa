import connection from "../configs/connectDB";

let getCustomerPage = (req, res) => {
  //logic
  let data = [];
  connection.query(
    "SELECT * FROM `customer` ",
    function (err, results, fields) {
      results.map((row) => {
        data.push({
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

      return res.render("customer.ejs", {
        dataUser: data,
        test: "abc string test",
      });
    }
  );
};
let detailCustomerPage

module.exports = {
  getCustomerPage,
};
