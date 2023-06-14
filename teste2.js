const data =  require("./fakeData");

module.exports = function(req, res, next){

    const { name, job } = req.body;

    if (!name || !job) {
        res.status(400).send("Name and job are required");
        return;
      }

    const newUser = {
        name,
        job,
    }
    try {
        data.push(newUser)

        res.status(201).send(newUser);
    } catch (error){
        next(error);
    }
};