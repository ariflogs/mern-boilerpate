const express = require("express");

const verify = require("../../middleware/tokenVerify");
const userController = require("../../controllers/userController");
const router = express.Router();

// @route -> /api/v1/user
// @desc -> Create User Account
// @access -> Public
router.post("/signup", userController.userSignup);

// @route -> /api/v1/user/verify
// @desc -> Verifying User Email
// @access -> Private
router.get("/verify/:verifyId", userController.userVerify);

// @route -> /api/v1/user
// @desc -> Get User Account
// @access -> Public
router.post("/login", userController.userLogin);

// @route -> /api/v1/user
// @desc -> Create User Account
// @access -> Private
router.get("/", verify, userController.userDetails);

// @route -> /api/v1/user
// @desc -> Create User Account
// @access -> Public
// router.post("/", userController.userSignup);

module.exports = router;
