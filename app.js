var express = require("express");
var bodyParser = require("body-parser");
var app = express();
const { authenticateUser } = require("./authMiddleware");
const jwt = require('jsonwebtoken');

var teste1 = require("./teste1");
var teste2 = require("./teste2");
var teste3 = require("./teste3");
var teste4 = require("./teste4");
var teste5 = require("./teste5");
const { HttpStatus } = require("./httpStatus");

app.set("view engine", "jade");

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public"));

app.get("/", function (req, res) {
  res.send(`get user/ </br>
  get users/ </br>
  post users/ </br>
  delete users/ </br>
  put users/ </br>
  `);
});

app.post("/auth", (req, res, next) => {
  const { name, job } = req.body;
  const token = jwt.sign({ name, job }, 'chave-secreta', { expiresIn: '1h' });

  res.json({ token });

  if (job === "Desenvolvedor") {
    next();
  } else {
    return res.status(HttpStatus.UNAUTHORIZED.code).send("Permission denied");
  }
});

app.get("/user", teste1.getUser);
app.get("/users", teste1.getUsers);
app.post("/users", teste2);
app.delete("/users", authenticateUser, teste3);
app.put("/users", authenticateUser, teste4.updateUser);
app.get("/users/access", teste5);

const port = 3000;
app.listen(port, function () {
  console.log("Express server listening on port " + port);
});
