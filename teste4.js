const fs = require("fs");
const data = require("./fakeData");

const updateUser = (req, res) => {
  const { id } = req.query;
  const { name, job } = req.body;

  const user = data.find((item) => item.id === id);
  if (user) {
    user.name = name;
    user.job = job;

    res.status(200).send(user);
  } else {
    res.status(404).send("User not found");
  }
};

module.exports = {
  updateUser,
};