const topicRouter = require("./topic.route");
const userRouter = require("./user.route");

function route(app) {
  app.get("/", (req, res) => {
    res.redirect("/topics");
  });

  app.use("/users", userRouter);

  app.use("/topics", topicRouter);
}

module.exports = route;
