var Movie = require('mongoose').model('Movie');
var Promise = require('promise');

exports.getHome = function(req, res) {

  var home = {
    comming: [],
    suggest: [],
    trichdoan: []
  };

  home.comming = new Promise(function(resolve, reject) {
    Movie.find({
      type: 'comming'
    }).limit(6).exec(function(err, collection) {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      // home.comming = collection;
      resolve(collection);
      // console.log('home comming: ' + home.comming);
    });    
  });

  home.suggest = new Promise(function(resolve, reject) {
    Movie.find({
      type: 'suggest'
    }).limit(6).exec(function(err, collection) {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      // console.log('suggest: ' + collection);
      // home.suggest = collection;
      resolve(collection);
    });
  });

  home.trichdoan = new Promise(function(resolve, reject) {
    Movie.find({
      type: 'trichdoan'
    }).limit(6).exec(function(err, collection) {
      if (err) {
        return res.status(500).json({ message: err.message });
      }
      // console.log('trichdoan: ' + collection);
      // home.trichdoan = collection;
      resolve(collection);
    });
  });

  Promise.all([home.comming, home.suggest, home.trichdoan]).then(function(value){
    res.json(home);
  })
};

