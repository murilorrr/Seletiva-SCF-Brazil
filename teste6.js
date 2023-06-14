const jwt = require('jsonwebtoken');
const { HttpStatus } = require("./httpStatus");

module.exports = function (req, res, next) {
  const { name, job } = req.body;
  const token = jwt.sign({ name, job }, 'chave-secreta', { expiresIn: '1h' });

  res.json({ token });

  if (job === "Desenvolvedor") {
    next();
  } else {
    return res.status(HttpStatus.UNAUTHORIZED.code).send("Permission denied");
  }
};