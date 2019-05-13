var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

var postSchema = mongoose.Schema({
    title: String,
    content: String
});
var Post = mongoose.model("Post", postSchema);

//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [postSchema]
});
var User = mongoose.model("User", userSchema);
