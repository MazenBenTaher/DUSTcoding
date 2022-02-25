import asyncHandler from "express-async-handler";

const SignInUser = asyncHandler(async (req, res) => {
  res.json({ message: "welcome Employers" });
});

const getClient = asyncHandler(async (req, res) => {
  res.json({ message: "Client work" });
});

export { SignInUser, getClient };
