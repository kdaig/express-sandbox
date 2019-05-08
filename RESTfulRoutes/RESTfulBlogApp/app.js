var bodyParser  = require("body-parser");
var mongoose = require("mongoose");
var express = require("express");
var app = express();

//App config
mongoose.connect("mongodb://localhost:27017/restful_blog_app", { useNewUrlParser: true });
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

//Mongoose/Model Config
var blogSchema = new mongoose.Schema({
    title: String,
    iamge: String,
    body: String,
    created:{type: Date, default: Date.now}
});

var Blog = mongoose.model("Blog", blogSchema);

app.get("/", function(req, res) {
   res.redirect("/blogs"); 
});

//Index Routes
app.get("/blogs", function(req, res){
    Blog.find({}, function(err,blogs){
        if(err){
            console.log("ERROR!");
        } else{
            res.render("index", {blogs: blogs});
        }
    });
});

//New Route
app.get("/blogs/new", function(req,res){
    res.render("new");
});

//Create Route
app.post("/blogs",function(req, res){
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        } else{
           res.redirect("/blogs"); 
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!!");
});