const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");
const gravatar = require("gravatar");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
require("dotenv").config;

const User = require("../models/User");

// ====================== Signup =======================
const userSignup = async (req, res) => {
  try {
    let { name, userName, email, studentId, password, university } = req.body;
    password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
    const avatar = gravatar.url(email, { s: "200", r: "x", d: "retro" }, false);
    const verificationToken = uuid.v4();

    user = new User({
      name,
      userName,
      university,
      email,
      studentId,
      password,
      avatar,
      verificationToken
    });

    const userSaved = await user.save();

    // //++++++++++++++++++ Setting up token ++++++++++++++++++
    const token = await jwt.sign(
      {
        _id: userSaved._id
      },
      process.env.JWT_PRIVATE_KEY,
      { expiresIn: "3d" }
    );
    res.set("auth-token", token);

    // ++++++++++++++++ Sending email for verification ++++++++++++++
    const smtpTransport = nodemailer.createTransport({
      // fll with your smtp credentials
    });

    const host = req.get("host");
    const link = `http://${host}/api/v1/user/verify/${verificationToken}`;

    mailOptions = {
      from: "devarifhossain@gmail.com",
      to: email,
      subject: "Please confirm your Email account",
      html: `Hello ${name},<br> Please Click on the link to verify your email.<br><a href=${link}>Click here to verify</a>`
    };

    const mailResponse = await smtpTransport.sendMail(mailOptions);

    res.send(mailResponse);
  } catch (err) {
    console.error(err);
    if ((err.name = "ValidationError")) {
      return res.status(422).json({ err: { msg: [err.message] } });
    }

    res.status(500).json({ err: { msg: ["server error!"] } });
  }
};

// ====================== Verification =======================
const userVerify = async (req, res) => {
  try {
    const user = await User.findOne({ verificationToken: req.params.verifyId });

    if (!user) {
      return res.status(400).json({ err: { msg: ["Invalid token!"] } });
    }

    user.verified = true;
    user.verificationToken = "verified";
    await user.save();

    res
      .status(200)
      .json({ response: "Congratulations. Your account is verified!", user });
  } catch (error) {
    console.error(error);

    res.status(500).json({ err: { msg: ["server error!"] } });
  }
};

// ====================== User Details =======================
const userDetails = async (req, res) => {
  try {
    const { userId } = req;
    const token = req.header("your-auth-token");
    const user = await User.findById(userId).select("-password");

    res.status(200).json({ response: { user, token } });
  } catch (error) {
    console.error(err);
    if ((err.name = "ValidationError")) {
      return res.status(422).json({ err: { msg: [err.message] } });
    }

    res.status(500).json({ err: { msg: ["server error!"] } });
  }
};

// ====================== Login =======================
const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      return res
        .status(400)
        .json({ err: { msg: ["Enter both your email and password!"] } });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ err: { msg: ["Email not found!"] } });
    }

    const validUser = bcrypt.compareSync(password, user.password);
    if (!validUser) {
      return res
        .status(400)
        .json({ err: { msg: ["Email or password did not match!"] } });
    }

    const token = await jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, {
      expiresIn: "7d"
    });

    res
      .header("your-auth-token", token)
      .status(200)
      .json({
        response: "You are logged in!",
        token,
        userId: user._id
      });
  } catch (error) {
    console.error(error);

    res.status(500).json({ err: { msg: ["server error!"] } });
  }
};

const userProfile = async (req, res) => {
  try {
    const { userId } = req.params;

    const user = await User.findById(userId);

    res.send(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ err: { msg: ["server error!"] } });
  }
};

module.exports = {
  userSignup,
  userVerify,
  userLogin,
  userProfile,
  userDetails
};
