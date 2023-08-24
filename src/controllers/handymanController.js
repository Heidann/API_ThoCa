import connection from "../configs/connectDB";

let getHandymanPage = (req, res) => {
  //logic
  let data = [];
  connection.query(
    "SELECT * FROM `handyman` ",
    function (err, results, fields) {
      results.map((row) => {
        data.push({
          // Tho Ca
          id: row.HandID,
          name: row.HandName,
          phone: row.HandPhone,
          jobid: row.JobID,
        });
      });

      return res.render("handyman.ejs", {
        dataUser: data,
        test: "abc string test",
      });
    }
  );
};
module.exports = {
  getHandymanPage,
};
