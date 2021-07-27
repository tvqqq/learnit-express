const express = require("express");
const router = express.Router();

const TopicController = require("../app/controllers/TopicController");
const authMiddlware = require("../app/middleware/AuthMiddleware");

router.get("/", authMiddlware, TopicController.index);

router.get("/add", TopicController.add);
router.post("/add", TopicController.create);

router.get("/:_id", TopicController.edit);
router.put("/:_id", TopicController.update);

router.delete("/:_id", TopicController.delete);

module.exports = router;
