import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import employer from "../models/employerModel.js";

const getEmployers = asyncHandler(async (req, res) => {
  const employers = await employer.find();
  if (!employer) {
    res.status(400);
    throw new Error("is not employer");
  }
  res.status(200).json(employers);
});

const updateEmployer = asyncHandler((req, res) => {
  const body = req.body;
  employer.updateOne({ _id: req.params.id }, body, (err, data) => {
    if (err) return res.status(500).send(err);
    return res.send("updated");
  });

  res.status(200);
});

const delateEmployer = asyncHandler(async (req, res) => {
  const employers = await employer.findById(req.params.id);
  if (!employers) {
    res.status(400);
    throw new Error("is not employer");
  }
  await employers.deleteOne();
  res.status(200).json({ id: req.params.id });
});

//login function
const loginEmployer = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  //Check for user email
  const Employer = await employer.findOne({ email });

  if (Employer && (await bcrypt.compare(password, Employer.password))) {
    res.json({
      _id: Employer.id,
      fullName: Employer.fullName,
      email: Employer.email,
      Token: generateToken(Employer._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid employer");
  }
});

// register Employer
const registerEmployer = asyncHandler(async (req, res) => {
  const { username, password, fullName, email, department, role, image } =
    req.body;

  if (
    !username ||
    !password ||
    !fullName ||
    !email ||
    !department ||
    !role ||
    !image
  ) {
    res.status(400);
    throw new Error("Please !! create correct information");
  }

  // check if employer exist
  const employerExist = await employer.findOne({ email });
  if (employerExist) {
    res.status(400);
    throw new Error("Employer already exists");
  }

  //crypt password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create Employer

  const Employer = await employer.create({
    username,
    password: hashedPassword,
    fullName,
    email,
    department,
    role,
    image,
  });
  if (Employer) {
    res.status(201).json({
      _id: Employer.id,
      fullName: Employer.fullName,
      email: Employer.email,
      Token: generateToken(Employer._id),
    });
  } else {
    res.status(400);
    throw new Error("Invalid employer data");
  }

  res.json({ message: "Login Employer" });
});

const getProfileEmp = asyncHandler(async (req, res) => {
  const { _id, username, password, fullName, email, department, role, image } =
    await employer.findById(req.employer.id);
  res.status(200).json({
    id: _id,
    username ,
    email,

  });
});
//Generate JWT
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "50d",
  });
};

export {
  getEmployers,
  loginEmployer,
  updateEmployer,
  delateEmployer,
  registerEmployer,
  getProfileEmp,
};
