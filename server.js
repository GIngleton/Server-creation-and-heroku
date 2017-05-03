//environmental variable setup


require("dotenv").config();

var express = require("express");
var app = express();
// always need the above lines when using express
// calling for library and then giving express functionality to an express variable
app.get('/', function(request, respond){
  respond.json({
    "user": process.env.DB_USER,
    "pass": process.env.DB_PASS
  });
});

app.listen(8080);

console.log("Server is running!");
