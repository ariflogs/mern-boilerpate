const mongoose = require("mongoose");
const schema = mongoose.Schema;

const requiredString = {
  type: String,
  required: true,
  trim: true
};

var validateEmail = function(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
};

const userScheme = new schema({
  name: requiredString,
  userName: {
    ...requiredString,
    unique: true,
    lowercase: true
  },
  email: {
    ...requiredString,
    unique: true,
    lowercase: true,
    unique: true,
    required: "Email address is required",
    validate: [validateEmail, "Please fill a valid email address"],
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address"
    ]
  },
  studentId: {
    type: Number,
    required: true
  },
  password: {
    ...requiredString,
    min: 6
  },
  avatar: {
    type: String
  },
  university: {
    type: schema.Types.ObjectId,
    require: true
  },
  verificationToken: requiredString,
  verified: {
    type: Boolean,
    default: false
  },
  date: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("users", userScheme);

module.exports = User;
