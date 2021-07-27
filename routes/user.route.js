const express = require("express");
const router = express.Router();
const passport = require("passport");

const UserController = require("../app/controllers/UserController");

router.get("/register", UserController.register);
router.post("/register", UserController.registerPost);

router.get("/login", UserController.login);

router.post(
  "/login",
  passport.authenticate("local", {
    failureRedirect: "/users/login",
    successRedirect: "/",
    failureFlash: true,
  })
);
router.post("/logout", UserController.logout);

module.exports = router;
