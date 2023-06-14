let { getFakeData } = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

module.exports = function (req, res, _next) {
  const { name, job } = req.body;

  if (!name || !job) {
    res.status(HttpStatus.BAD_REQUEST.code).send("Name and job are required");
    return;
  }

  const highestId = Math.max(...getFakeData().map((user) => user.id)) || 0;
  const newUserId = highestId + 1;

  const newUser = {
    id: newUserId,
    name,
    job,
  };

  getFakeData().push(newUser);

  res.status(HttpStatus.CREATED.code).send(newUser);
};
