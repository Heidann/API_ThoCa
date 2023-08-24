import express from "express";
import configViewEngine from "./configs/viewEngine";
import initWebRoute from "./route/web";
import connection from "./configs/connectDB";
import cors from "cors";

require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

// setup view engine
configViewEngine(app);
app.use(cors());

//init web route
initWebRoute(app);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
