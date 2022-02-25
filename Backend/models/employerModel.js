import mongoose from "mongoose";

const employerSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "please add a user name"],
    },
    password: {
      type: String,
      required: [true, "please add a password"],
    },
    fullName: {
      type: String,
      required: [true, "please add a user name"],
    },
    email: {
      type: String,
      required: [true, "please add a e-mail"],
    },
    department: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: [true, "please add a Role"],
    },
    image: {
      type: String,
      required: [true, "please add a image"],
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("employers", employerSchema);
