const HttpStatus = {
  OK: { code: 200 },
  CREATED: { code: 201 },
  BAD_REQUEST: { code: 400 },
  UNAUTHORIZED: { code: 401 },
  NOT_FOUND: { code: 404 }, 
  INTERNAL_SERVER_ERROR: { code: 500 }
};

module.exports = { HttpStatus };
