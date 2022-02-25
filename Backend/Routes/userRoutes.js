import express from "express";
import { SignInUser, getClient } from "../Controllers/userController.js";

const router = express.Router();

router.route("/login").post(SignInUser);
router.route("/logged/Me").get(getClient);

export default router;
