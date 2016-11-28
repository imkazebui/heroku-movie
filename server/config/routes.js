var auth = require('./auth'),
  users = require('../controllers/users'),
  courses = require('../controllers/courses'),
  home = require('../controllers/home'),
  videos = require('../controllers/videos'),
  mongoose = require('mongoose'),
  User = mongoose.model('User');

module.exports = function(app) {

  app.get('/api/users', auth.requiresRole('admin'), users.getUsers);
  app.post('/api/users', users.createUser);
  app.put('/api/users', users.updateUser);

  app.get('/api/courses', courses.getCourses);
  app.get('/api/videos/:id', videos.getVideoById);
  app.get('/api/category/:id', videos.getVideoByCategory);
  app.get('/api/search/:id', videos.searchVideo);

  app.get('/api/home', home.getHome);

  app.get('/partials/*', function(req, res) {
    res.render('../../public/app/' + req.params[0]);
  });

  // Vinh
  // app.get('/admin/dashboard', auth.requiresRole('admin'), admin.dashboard);
  // app.get('/admin/movie', auth.requiresRole('admin'), admin.movie);
  // app.get('/admin/users', auth.requiresRole('admin'), admin.users);

  // Data
  // app.get('/admin/data/drive', auth.requiresRole('admin'), admin.data.drive);

  // scrape
  // app.get('/admin/scrape', auth.requiresRole('admin'), admin.scrape);
  // End

  app.post('/login', auth.authenticate);

  app.post('/logout', function(req, res) {
    req.logout();
    res.end();
  });

  app.all('/api/*', function(req, res) {
    res.send(404);
  });

  app.get('*', function(req, res) {
    res.render('index', {
      bootstrappedUser: req.user
    });
  });
}