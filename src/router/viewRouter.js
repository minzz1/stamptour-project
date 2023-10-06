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
  tutorialCourseViewController,
  tutorialQrViewController,
  tutorialStampViewController,
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
viewRouter.get("/tutorialCourse", tutorialCourseViewController);
viewRouter.get("/tutorialQr", tutorialQrViewController);
viewRouter.get("/tutorialStamp", tutorialStampViewController);



export default viewRouter;
