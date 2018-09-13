var mongoose = require("mongoose");
var Campground = require("./models/campground");
var Comment   = require("./models/comment");

var data = [
    {
        name: "miku",
        image: "http://h.hiphotos.baidu.com/zhidao/pic/item/e1fe9925bc315c605bd378888bb1cb1349547716.jpg",
        description: "blah blah blah"
    },
    {
        name: "Rem",
        image: "http://i2.hdslb.com/bfs/archive/2f11d03beb321adebc921d59493e8c7b3257bf75.jpg",
        description: "blah blah blah"
    },
    {
        name: "Emilia",
        image: "http://att.bbs.duowan.com/forum/201607/11/171631c7478244e7kzqx57.jpg",
        description: "blah blah blah"
    }
]

function seedDB(){
   //Remove all campgrounds
   Campground.remove({}, function(err){
        // if(err){
        //     console.log(err);
        // }
        // console.log("removed campgrounds!");
        //  //add a few campgrounds
        // data.forEach(function(seed){
        //     Campground.create(seed, function(err, campground){
        //         if(err){
        //             console.log(err)
        //         } else {
        //             console.log("added a campground");
        //             //create a comment
        //             Comment.create(
        //                 {
        //                     text: "This place is great, but I wish there was internet",
        //                     author: "Homer"
        //                 }, function(err, comment){
        //                     if(err){
        //                         console.log(err);
        //                     } else {
        //                         campground.comments.push(comment);
        //                         campground.save();
        //                         console.log("Created new comment");
        //                     }
        //                 });
        //         }
        //     });
        // });
    }); 
    //add a few comments
}

module.exports = seedDB;
