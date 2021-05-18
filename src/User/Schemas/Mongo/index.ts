import mongoose from "mongoose"

const UserSchema = new mongoose.Schema({
  surname: String,
  lastname: String,
  dni: String,
});

export const User = mongoose.model("user", UserSchema);
