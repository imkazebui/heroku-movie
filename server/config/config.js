var path = require('path');

// Chuan hoa duong dan
var rootPath = path.normalize(__dirname + '/../../');

// Thiet lap port, duong dan databse
module.exports = {
  development: {
    db: 'mongodb://localhost/movievp',
    rootPath: rootPath,
    port: process.env.PORT || 3030
  },
  production: {
    rootPath: rootPath,
    db: 'duong dan mongodb tren host',
    port: process.env.PORT || 80
  }
}