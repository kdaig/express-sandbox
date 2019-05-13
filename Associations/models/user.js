var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/_2", { useNewUrlParser: true });

//User - email, name
var userSchema = new mongoose.Schema({
    email: String,
    name: String,
    post: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    }
    ]
});

module.exports = mongoose.model("User", userSchema);
