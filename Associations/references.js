var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/_2", { useNewUrlParser: true });

var Post = require("./models/post");
var User = require("./models/user");
