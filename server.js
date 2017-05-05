//environmental variable setup without storing in system



require("dotenv").config();

var express = require("express");
var app = express();
// always need the above lines when using express
// calling for library and then giving express functionality to an express variable
app.get('/', function(request, respond){
  if (process.env.NODE_ENV == 'dev'){
  respond.json({
    "user": process.env.DB_USER,
    "pass": process.env.DB_PASS
  });
} else {
    respond.json({
      "user": "Does not exist",
      "pass": "User does not exist"
    });
}
});

app.listen(8080);

console.log("Server is running!");
