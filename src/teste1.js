const { getFakeData, findUserByName } = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

function addOneCountToEveryUser(user) {
  if(!user) return;
  if (!user.count) return user.count = 1;
  return user.count += 1;
}

const getUser = (req, res, _next) => {
  const { name } = req.query;

  const user = findUserByName(name);

  addOneCountToEveryUser(user);

  if (user) {
    return res.status(HttpStatus.OK.code).send(user);
  } else {
    return res.status(HttpStatus.NOT_FOUND.code).send("User not found");
  }
};

const getUsers = (_req, res, _next) => {
  const users = getFakeData();
  return res.send(users);
};

module.exports = {
  getUser,
  getUsers,
};
