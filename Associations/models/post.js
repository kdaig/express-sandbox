var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/_2", { useNewUrlParser: true });

var postSchema = mongoose.Schema({
    title: String,
    content: String
});

module.exports = mongoose.model("Post", postSchema);