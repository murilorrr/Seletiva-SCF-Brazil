const { getFakeData, updateFakeUser } = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

const updateUser = (req, res, next) => {
  const { id } = req.query;
  const { name, job } = req.body;

  if (!name || !job) {
    res.status(HttpStatus.BAD_REQUEST.code).send("Name and job are required");
    return;
  }

  const user = getFakeData().find((item) => item.id == id);
  if (user) { 
    const returnedUser = updateFakeUser(user.id, { name, job });

    return res.status(HttpStatus.OK.code).send(returnedUser);
  } else {
    return res.status(HttpStatus.NOT_FOUND.code).send("User not found");
  }
};

module.exports = {
  updateUser,
};