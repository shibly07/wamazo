const status = require("../utils/status");

const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode || status.SERVER_ERROR.statusCode;
  const statusMessage = err.message || status.SERVER_ERROR.statusMessage;
  res.status(statusCode).json({ message: statusMessage });
};
module.exports = errorHandler;
