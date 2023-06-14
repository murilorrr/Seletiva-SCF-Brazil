const data = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

module.exports = function (req, res, next) {
  const { name, job } = req.body;

  if (!name || !job) {
    res.status(HttpStatus.BAD_REQUEST.code).send("Name and job are required");
    return;
  }

  const newUser = {
    name,
    job,
  };

    data.push(newUser);

    res.status(HttpStatus.CREATED.code).send(newUser);
};
