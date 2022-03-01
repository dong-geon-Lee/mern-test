const errorHandler = (err, req, res, next) => {
  const responseStatus = res.statusCode ? res.statusCode : 500;

  res.status(responseStatus).json({
    error: err.message,
    stack: err.stack,
  });
};

module.exports = { errorHandler };
