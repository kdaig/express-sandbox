var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app");

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "George",
//     age:11,
//     temperament: "Grouchy"
// });

// george.save(function(err, cat){
//     if (err){
//         console.log("Something went wrong!")
//     } else {
//         console.log("WE JUST SAVED A CAT TO THE DB:")
//         console.log(cat);
//     }
// });

Cat.create({
   name: "Snow White",
   age:15,
   temperament: "Bland"
}, function(err, cat){
    if(err){
        console.log(err);
    } else {
        console.log(cat);
    }
});

Cat.find({}, function(err, cats){
    if(err){
        console.log("OH NOES!! ERROR!!");
        console.log(err);
    }   else{
        console.log("ALL THE CATS. . . ");
        console.log(cats);
    }
});