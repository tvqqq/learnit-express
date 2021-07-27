const User = require("../models/User");
const bcrypt = require("bcrypt");

class UserController {
  // [GET] /register
  register(req, res, next) {
    res.render("register");
  }

  // [POST] /register
  async registerPost(req, res, next) {
    try {
      const hashedPassword = await bcrypt.hash(req.body.password, 10);
      const data = {
        ...req.body,
        password: hashedPassword,
      };
      User.create(data);
      res.redirect("/users/login");
    } catch (err) {
      next();
    }
  }

  // [GET] /login
  login(req, res, next) {
    res.locals.message = req.flash("message");
    res.render("login");
  }

  // [POST] /logout
  logout(req, res) {
    // res.render("topics/add");
  }
}

module.exports = new UserController();
