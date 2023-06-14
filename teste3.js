let data = require("./fakeData");
const originalLength = data.length;

module.exports = function(req, res) {
  
    const { name } =  req.query;

    data = data.filter((user) => user.name !== name)

    if(originalLength === data.length) return res.status(404).send("Not Found");
    return res.status(200).send();
};