var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
        {name: "Catfish Highway", image: "https://images.unsplash.com/photo-1474139242267-eef6daa88e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1487&q=80"},
        {name: "Muskrat Lake", image: "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1315&q=80"},
        {name: "White Water", image: "https://stmedia.stimg.co/Whitewater+SP+1.jpg?auto=compress&crop=faces"}
        ]


app.get("/", function(req, res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
      res.render("campgrounds", {campgrounds:campgrounds});
});

app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var newCampground = {name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!!");
})