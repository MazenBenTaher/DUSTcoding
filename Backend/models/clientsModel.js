import mongoose from "mongoose";

const clientSchema = mongoose.Schema(
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
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("client", clientSchema);
