import express, { response } from "express";
import homeController from "../controllers/homeController";
import customerController from "../controllers/customerController";
import handymanController from "../controllers/handymanController";

import connection from "../configs/connectDB";
let router = express.Router();

const initWebRoute = (app) => {
  router.get("/customer", customerController.getCustomerPage);

  router.get("/handyman", handymanController.getHandymanPage);

  app.get("/p", (req, res) => {
    return res.json(" Eric!");
  });

  return app.use("/", router);
};

export default initWebRoute;
