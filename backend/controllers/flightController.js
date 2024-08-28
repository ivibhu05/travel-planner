const catchAsync = require("./../utils/catchAsync");
const dayjs = require("dayjs");
const APIFeatures = require("./../utils/apiFeatures");
const axios = require("axios");

exports.getAllFlights = catchAsync(async (req, res, next) => {
  const date = dayjs(req.body.date).format("YYYYMMDD");

  const flights = axios
    .get(
      `https://api.flightapi.io/trackbyroute/${process.env.API_KEY}?date=${date}&airport1=${req.body.airport1}&airport2=${req.body.airport2}`
    )
    .then((response) => {
      return res.status(200).json({
        status: "success",
        data: response.data,
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
