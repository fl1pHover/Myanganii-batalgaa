import mongoose, { Document, Schema } from "mongoose";



const UserSchema = new mongoose.Schema(
  {

    phone: {
      type: Number,
      // required: true,
    },
    username: {
      type: String, 
      required: true
    },
    email: {
      type: String,
      // required: true,
    },
    password: {
      type: String,
      required: true
    },
    type: {
      type: String, 
      default: "ADMIN"
    }
  },
  { timestamps: true }
);

const User =
  mongoose.models.User || mongoose.model("User", UserSchema);

export default User;
