const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const status = require("../utils/status");

const validateToken = asyncHandler(async (req, res, next) => {
  let token;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];

    if (!token) {
      res.status(status.UNAUTHORIZED.statusCode);
      throw new Error("User is not authorized or token is missing");
    }

    jwt.verify(
      token,
      process.env.JWT_ACCESS_TOKEN_SECRET_KEY,
      (err, decoded) => {
        if (err) {
          res.status(status.UNAUTHORIZED.statusCode);
          throw new Error("User is not authorized.");
        }
        req.user = decoded.user;
        next();
      }
    );
  }
});

module.exports = validateToken;
