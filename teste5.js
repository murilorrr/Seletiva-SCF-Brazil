const data = require("./fakeData");

module.exports = function (req, res) {
  const { name } = req.query;

  const user = data.find((user) => user.name === name);

  res.send("Usuário " + name + "  foi lido " + user.count + " vezes.");
};
