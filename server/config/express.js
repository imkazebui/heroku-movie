var express = require('express'),
    stylus = require('stylus'),
    // HTTP request logger
    logger = require('morgan'),
    // Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
    bodyParser = require('body-parser'),
    // Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
    cookieParser = require('cookie-parser'),
    session = require('express-session'),
    passport = require('passport');


module.exports = function(app, config) {
  function compile(str, path) {
    return stylus(str).set('filename', path);
  }

  app.set('views', config.rootPath + '/server/views');
  app.set('view engine', 'jade');
  app.use(logger('dev'));
  app.use(cookieParser());
  // https://github.com/expressjs/body-parser#bodyparserurlencodedoptions
  // true: use qs library for parser
  app.use(bodyParser.urlencoded({extended:true}));
  app.use(bodyParser.json());
  // not understand
  app.use(session({secret: 'movie unicorns',resave:false,saveUninitialized:false}));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(stylus.middleware(
    {
      src: config.rootPath + '/public',
      compile: compile
    }
  ));
  app.use(express.static(config.rootPath + '/public'));
}