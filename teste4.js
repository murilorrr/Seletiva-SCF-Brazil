const data = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

const updateUser = (req, res, next) => {
  const { id } = req.query;
  const { name, job } = req.body;

  if (!name || !job) {
    res.status(HttpStatus.BAD_REQUEST.code).send("Name and job are required");
    return;
  }

  const user = data.find((item) => item.id == id);
  if (user) {
    user.name = name;
    user.job = job;

    return res.status(HttpStatus.OK.code).send(user);
  } else {
    return res.status(HttpStatus.NOT_FOUND.code).send("User not found");
  }
};

module.exports = {
  updateUser,
};