const express = require("express");
const router = express.Router();

const TopicController = require("../app/controllers/TopicController");

router.get("/", TopicController.index);

router.get("/add", TopicController.add);
router.post("/add", TopicController.create);

router.get("/:_id", TopicController.edit);
router.put("/:_id", TopicController.update);

module.exports = router;
