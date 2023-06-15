let {getFakeData, setFakeData} = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

module.exports = function (req, res, _next) {
  const { name } = req.query;
  
  const originalLength = getFakeData().length;

  const newData = getFakeData().filter((user) => user.name !== name);

  setFakeData(newData);

  if (originalLength === getFakeData().length) return res.status(HttpStatus.NOT_FOUND.code).send("Not Found");
  return res.status(HttpStatus.OK.code).send();
};
