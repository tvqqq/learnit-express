const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const User = require("../app/models/User");

const initPassport = () => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username: username }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "User not found." });
        }
        const comparePwd = bcrypt.compareSync(password, user.password);
        if (!comparePwd) {
          return done(null, false, { message: "Password incorrect" });
        }
        return done(null, user);
      });
    })
  );
  passport.serializeUser((user, done) => {
    done(null, user.username);
  });
  passport.deserializeUser((username, done) => {
    User.findOne({ username: username }, function (err, user) {
      done(null, user);
    });
  });
};

module.exports = { initPassport };
