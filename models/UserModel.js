const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    username: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    profilePicUrl: {
      type: String,
    },
    newMsgPopUp: {
      type: Boolean,
      default: true,
    },
    unreadMsg: {
      type: Boolean,
      default: false,
    },
    unreadNotification: {
      type: Boolean,
      default: false,
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "root"], //Mongoose has several inbuilt validators. Strings have enum as one of the validators. So enum creates a validator and checks if the value is given in an array
    },
    resetToken: {
      type: String,
    },
    expireToken: {
      type: Date,
    },
  },
  { timeStamp: true }
);

module.exports = mongoose.model("User", userSchema);
