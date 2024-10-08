const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    code: err.code,
  });
};

module.exports = (err, req, res) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  sendErrorDev(err, res);
};
