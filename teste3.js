let data = require("./fakeData");
const { HttpStatus } = require("./httpStatus");
const originalLength = data.length;

module.exports = function (req, res) {
  const { name } = req.query;

  data = data.filter((user) => user.name !== name);

  if (originalLength === data.length) return res.status(HttpStatus.NOT_FOUND.code).send("Not Found");
  return res.status(HttpStatus.OK.code).send();
};
