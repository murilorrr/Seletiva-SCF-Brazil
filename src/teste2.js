let { getFakeData, setFakeData } = require("./fakeData");
const { HttpStatus } = require("./httpStatus");

const highestIdFunction = (data) => data.length > 0 ? Math.max(...data.map((user) => user.id)) : 0;

const createUserFunction = function (req, res, _next) {
  const { name, job } = req.body;

  if (!name || !job) {
    res.status(HttpStatus.BAD_REQUEST.code).send("Name and job are required");
    return;
  }

  const data = getFakeData();

  const newUserId = highestIdFunction(data) + 1;

  const newUser = {
    id: newUserId,
    name,
    job,
  };

  data.push(newUser);
  setFakeData(data);
           
  res.status(HttpStatus.CREATED.code).send(newUser);
};

module.exports = {
  highestIdFunction,
  createUserFunction
}
