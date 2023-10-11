import express from "express";
import { getData } from "../controller/searchflight.js";
import { signUp, signIn } from "../controller/userController.js";

const router = express.Router();

router.post("/fetchdata", getData);
router.post("/signup", signUp);
router.post("/signin", signIn);

export default router;
