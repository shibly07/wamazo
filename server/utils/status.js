const status = {
  OK: { statusCode: 200, statusMessage: "Ok" },
  CREATED: { statusCode: 201, statusMessage: "Created" },
  ACCEPTED: { statusCode: 202, statusMessage: "Updated" },
  NO_RESPONSE: { statusCode: 204, statusMessage: "Deleted" },
  BAD_REQUEST: { statusCode: 400, statusMessage: "Invalid" },
  UNAUTHORIZED: {
    statusCode: 401,
    statusMessage: "Authentication failed",
  },
  NOT_FOUND: { statusCode: 404, statusMessage: "Not found" },
  SERVER_ERROR: { statusCode: 500, statusMessage: "Server error" },
};

module.exports = status;
