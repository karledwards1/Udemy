const express = require("express");
const app = express();

app.get("/", function(req, res){
  res.send("<h1>Hello world</h1>");
});

app.get("/contact", function(req, res){
  res.send("Contact me");
});

app.listen(3000, function(){
  console.log("Server started on Port 3000");
});
