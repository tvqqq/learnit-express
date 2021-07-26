const express = require("express");
const router = express.Router();

const TopicController = require("../app/controllers/TopicController");

router.get("/", TopicController.index);

router.get("/add", TopicController.add);
router.post("/add", TopicController.create);

module.exports = router;
