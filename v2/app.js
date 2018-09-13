var express    = require("express");
var app        = express();
var bodyParser = require("body-parser");
var mongoose   = require("mongoose");

mongoose.connect("mongodb://localhost/yelp_camp"); //connect mongoose
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

//Schema set up
var campgroundSchema = new mongoose.Schema({
    name: String,
    image: String,
    description: String
});

//use schema to set up model with methods(and also make a collection)
var Campground = mongoose.model("Campground", campgroundSchema);

//use a array to store campgrounds
// var campgrounds = [
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"},
//         {name: "Salmon Creek", image: "https://farm9.staticflickr.com/8442/7962474612_bf2baf67c0.jpg"},
//         {name: "Granite Hill", image: "https://farm1.staticflickr.com/60/215827008_6489cd30c3.jpg"},
//         {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6057/6234565071_4d20668bbd.jpg"}
// ];

app.get("/", function(req, res){
    res.render("landing");
});

app.get("/index", function(req, res){
    //get all campgrounds from the database
    Campground.find({}, function(err, allcampgrounds){
        if(err)
            console.log(err);
        else
            res.render("index", {campgrounds:allcampgrounds});
    })
});

//the post request on '/campgrounds' path
app.post("/index", function(req, res){
    var name = req.body.name; //to use data from form, we use req.body
    var image = req.body.image;
    var description = req.body.description;
    /*create the new object in the database*/
    Campground.create(
    { 
        name: name,
        image: image,
        description: description
    }, function(err, campground){
        if(err){
            console.log(err);
        } else {
            console.log("NEWLY CREATE CAMPGROUND: ");
            console.log(campground);
            res.redirect("/index");
        }
    });
});
 
app.get("/index/new", function(req, res){
    res.render("new.ejs");
});

app.get("/index/:id", function(req, res){
    //find the campground with provided ID, use findById(id, callback), that provided by mongoose
    Campground.findById(req.params.id, function(err, foundCampground){
        if(err){
            console.log(err);
        } else {
            res.render("show", {campground: foundCampground});
        }
    })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The yelp camp server has started");
});