var Movie = require('mongoose').model('Movie');

exports.getVideoById = function(req, res) {
  Movie.findOne({_id:req.params.id}).exec(function(err, video) {
    res.json(video);
    // console.log("video " + video);
  })
}

exports.getVideoByCategory = function(req, res) {
  Movie.find({type:req.params.id}).limit(12).exec(function(err, video) {
    res.json(video);
    // console.log("video " + video);
  })
}

exports.searchVideo = function(req, res) {
  Movie.find({titleVi:req.params.id}).limit(12).exec(function(err, video) {
    res.json(video);
    // console.log("video " + video);
  })
}