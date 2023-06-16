const jwt = require("jsonwebtoken");
const { HttpStatus } = require("./httpStatus");

const authenticateUser = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(HttpStatus.UNAUTHORIZED.code).send("Unauthorized");
  }

  try {
    const decodedToken = jwt.verify(token, "chave-secreta");
    req.user = decodedToken.user;

    next();
  } catch (error) {
    return res.status(HttpStatus.UNAUTHORIZED.code).send("Unauthorized");
  }
};

module.exports = { authenticateUser };
