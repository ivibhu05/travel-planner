const express = require("express");
const flightController = require("./../controllers/flightController");

const router = express.Router();

router.route("/").post(flightController.getAllFlights);

module.exports = router;
