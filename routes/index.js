const topicRouter = require("./topic.route");

function route(app) {
  app.get("/", (req, res) => {
    res.redirect("/topics");
  });

  app.use("/topics", topicRouter);
}

module.exports = route;
