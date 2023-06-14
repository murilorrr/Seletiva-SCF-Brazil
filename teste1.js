const data = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

const getUser = (req, res, next) => {
  const { name } = req.query;
  const user = data.find((item) => {
    addOneCountToEveryItem();
    return item.name === name;

    function addOneCountToEveryItem() {
      if (!item.count) {
        item.count = 1;
      } else {
        item.count += 1;
      }
    }
  });
  if (user) {
    return res.status(HttpStatus.OK.code).send(user);
  } else {
    return res.status(HttpStatus.NOT_FOUND.code).send("User not found");
  }
};

const getUsers = (req, res, next) => {
  const users = data || [];
  return res.send(users);
};

module.exports = {
  getUser,
  getUsers,
};
