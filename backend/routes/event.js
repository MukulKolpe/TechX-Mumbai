const express = require("express");
const router = express.Router();

const { getEvents, getEventById, createEvent } = require("../controller/event");

router.route("/").get(getEvents);
router.route("/:id").get(getEventById);
router.route("/add").post(createEvent);

module.exports = router;