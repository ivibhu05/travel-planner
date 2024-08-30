const dayjs = require("dayjs");
const axios = require("axios");
const catchAsync = require("./../utils/catchAsync");

exports.getAllFlights = catchAsync(async (req, res) => {
  const date = dayjs(req.body.date).format("YYYYMMDD");

  const flights = await axios.get(
    `https://api.flightapi.io/trackbyroute/${process.env.API_KEY}?date=${date}&airport1=${req.body.airport1}&airport2=${req.body.airport2}`
  );
  return res.status(200).json({
    status: "success",
    data: flights.data,
  });
});
