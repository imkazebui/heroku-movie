var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    courseModel = require('../models/Course');
    movieModel = require('../models/Movie');

module.exports = function(config) {
  mongoose.connect(config.db);
  var db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error...'));
  db.once('open', function callback() {
    console.log('movie db opened');
  });

  userModel.createDefaultUsers();
  courseModel.createDefaultCourses();
  movieModel.createDefaultMovie();

};

