var express = require('express');
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));

var path = require("path");

var answer;

app.post('/add', function(req, res) {
  request = req.body;
  console.log(request);
  answer = parseInt(request.numberOne) + parseInt(request.numberTwo);
  res.send("" + answer);
});

app.get('/*', function(req, res) {
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "/public/", file));
});

app.listen(5000, function() {
  console.log('listening on the port 5000');
});
