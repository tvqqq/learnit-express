const {
  multipleMongooseToObject,
  mongooseToObject,
} = require("../../helpers/mongoose");
const Topic = require("../models/Topic");

class TopicController {
  // [GET] /topics
  index(req, res, next) {
    Topic.find({})
      .then((topics) => {
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

  // [GET] /topics/:_id
  edit(req, res, next) {
    Topic.findById(req.params._id)
      .then((topic) => {
        res.render("topics/edit", { topic: mongooseToObject(topic) });
      })
      .catch(next);
  }

  // [PUT] /topics/:id
  update(req, res, next) {
    Topic.updateOne({ _id: req.params._id }, req.body)
      .then(() => {
        res.redirect("/topics");
      })
      .catch(next);
  }

}

module.exports = new TopicController();
