const { findUserByName } = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

module.exports = function (req, res) {
  const { name } = req.query;

  if(!name) return res.status(HttpStatus.BAD_REQUEST.code).send("name is required");

  const user = findUserByName(name);
  const userCounter = user?.count ? user.count : 0;

  res.status(HttpStatus.OK.code).send("Usuário " + name + "  foi lido " + userCounter + " vezes.");
};
