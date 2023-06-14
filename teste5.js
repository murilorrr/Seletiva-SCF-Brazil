const data = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

module.exports = function (req, res) {
  const { name } = req.query;

  if(!name) return res.status(HttpStatus.BAD_REQUEST.code).send("name is required");

  const user = data.find((user) => user.name === name);

  res.status(HttpStatus.OK.code).send("Usuário " + name + "  foi lido " + user.count || 0 + " vezes.");
};
