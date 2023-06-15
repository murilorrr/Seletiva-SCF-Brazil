const jwt = require('jsonwebtoken');
const { HttpStatus } = require("./httpStatus");

module.exports = function (req, res, next) {
  const { name, job } = req.body;

  if (job !== "Desenvolvedor") return res.status(HttpStatus.UNAUTHORIZED.code).send("Permission denied");

  const token = jwt.sign({ name, job }, 'chave-secreta', { expiresIn: '1h' });

  res.json({ token });
  next();
};