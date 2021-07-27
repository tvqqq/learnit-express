const authMiddlware = (req, res, next) => {
  if (req.isAuthenticated()) {
    next();
  } else {
    res.redirect("/users/login");
  }
};

module.exports = authMiddlware;
