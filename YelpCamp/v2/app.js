var  express    = require("express"),
     app        = express(),
     bodyParser = require("body-parser"),
     mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useNewUrlParser: true });
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema SETUP
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

var campgrounds = [
        {name: "Catfish Highway", image: "https://images.unsplash.com/photo-1474139242267-eef6daa88e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1487&q=80"},
        {name: "Muskrat Lake", image: "https://images.unsplash.com/photo-1554457686-c8409f3d8156?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1315&q=80"},
        {name: "White Water", image: "https://stmedia.stimg.co/Whitewater+SP+1.jpg?auto=compress&crop=faces"}
        ]

app.get("/", function(req, res) {
    res.render("landing");
});

//INDEX - show all campgrounds
app.get("/campgrounds", function(req, res){
    Campground.find({}, function(err, allCampgrounds){
        if(err){
            console.log(err);
        } else {
            res.render("index", {campground:allCampgrounds});
        }
    });
});


// app.get("/campgrounds", function(req, res){
//       res.render("campgrounds", {campgrounds:campgrounds});
// });

//Create -add new campgrounds to database
app.post("/campgrounds", function(req, res){
    var name = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name, image: image, description:desc};
    Campground.create(newCampground, function(err, newlyCreated){
        if(err){
            console.log(err);
        } else {
            res.redirect("/campgrounds");
        }
    });
});

//New show form form to create new campground
app.get("/campgrounds/new", function(req,res){
    res.render("new.ejs");
});

//Show 
app.get("/campgrounds/:id", function(req, res) {
   Campground.findById(req.params.id, function(err, foundCampground){
       if(err){
           console.log(err);
       } else {
            res.render("show", {campground:foundCampground}); 
       }
   });
   req.params.id
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The YelpCamp Server Has Started!!");
});