import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  employers: {
    type: mongoose.Schema.Types.ObjectId,
  },
  client: {
    type: mongoose.Schema.Types.ObjectId,
  },
});
