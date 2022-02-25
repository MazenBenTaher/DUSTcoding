import express from "express";
import {
  getEmployers,
  updateEmployer,
  delateEmployer,
  registerEmployer,
  loginEmployer,
  getProfileEmp,
} from "../Controllers/employersController.js";
import protect from "../Middleware/authMiddleware.js";

const router = express.Router();

router.route("/").get(protect, getEmployers);
router.route("/me").get(protect, getProfileEmp);
router.route("/:id").put(updateEmployer).delete(delateEmployer);
router.route("/Login").post(loginEmployer);
router.route("/Register").post(registerEmployer);
export default router;
