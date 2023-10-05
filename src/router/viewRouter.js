// viewRouter.js
import express from "express";
import {
  courseViewController,
  homeViewController,
  introduceViewController,
  joinViewController,
  loginViewController,
  profileViewController,
  qrViewController,
  datailViewController,
} from "../controller/viewController";

const viewRouter = express.Router();

viewRouter.get("/login", loginViewController);
viewRouter.get("/join", joinViewController);
viewRouter.get("/profile", profileViewController);
viewRouter.get("/qr", qrViewController);
viewRouter.get("/course", courseViewController);
viewRouter.get("/introduce", introduceViewController);
viewRouter.get("/", homeViewController);
viewRouter.get("/detail", datailViewController);


export default viewRouter;
