const mongoose = require("mongoose");
const address = require("./models/addressModel");

const userSchema = new mongoose.Schema(
  {
    first_name: String,
    last_name: String,
    email: { type: String, required: true, unique: true },
    mobile: { type: String, required: true, unique: true, min: 10, max: 12 },
    password: String,
    address: address,
  },
  {
    toObject: {
      transform: function (doc, ret, options) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.password;
        delete ret.__v;
        return ret;
      },
    },
  }
);

module.exports = mongoose.model("user_master", userSchema);
