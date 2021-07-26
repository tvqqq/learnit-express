const { multipleMongooseToObject } = require("../../helpers/mongoose");
const Topic = require("../models/Topic");

class TopicController {
  // [GET] /topics
  index(req, res, next) {
    console.log(1);
    Topic.find({})
      .then((topics) => {
        console.log(topics);
        res.render("topics/list", { topics: multipleMongooseToObject(topics) });
      })
      .catch(next);
  }

  // [GET] /topics/add
  add(req, res) {
    res.render("topics/add");
  }

  // [POST] /topics/add
  create(req, res) {
    const data = {
      ...req.body,
      status: 0,
    };
    Topic.create(data);
    res.redirect("/topics/list");
  }
}

module.exports = new TopicController();
