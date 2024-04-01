import mongoose from "mongoose";
const { Schema } = mongoose;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: Buffer, required: true },
    firstName: { type: String },
    lastName: { type: String },
    
    salt: Buffer,
    resetPasswordToken: { type: String, default: "" },
  },
  { timestamps: true }
);
let User = mongoose.model("User", userSchema);
export default User;
