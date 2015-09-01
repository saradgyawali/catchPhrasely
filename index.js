// REQUIREMENTS //
var express = require("express"),
    app = express(),
    path = require("path"),
    bodyParser = require("body-parser"),
    // _ = require("underscore"),
    views = path.join(process.cwd(), "views/");

// CONFIG //
// serve js & css files
app.use("/static", express.static("public"));
app.use("/vendor", express.static("bower_components"));
// body parser config to accept all datatypes
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/home",function(req,res){
	res.sendFile(views +"/index.html");
});
app.get("/",function(req,res){
	res.send("hello world");
});
app.listen(3000,function(){
	console.log("listening on port 3000");
});