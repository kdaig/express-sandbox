var bodyParser  = require("body-parser"),
mongoose        = require("mongoose"),
express         = require("express"),
app             = express();

//App config
mongoose.connect("mongodb://localhost/restful_blog_app", { useNewUrlParser: true });
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

//RESTful Routes
app.get("/blogs", function(req, res){
    Blog.find({}, function(err,blogs){
        if(err){
            console.log("ERROR!");
        } else{
            res.render("index", {blogs: blogs});
        }
    });
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is running!!");
});