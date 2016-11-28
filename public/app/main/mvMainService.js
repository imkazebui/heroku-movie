angular.module('app').service('mvMainService', function($http, $q) {
	this.getHome = function(cb) {
		$http.get('/api/home').then(cb);
	}; 
});