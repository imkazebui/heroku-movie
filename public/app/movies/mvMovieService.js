angular.module('app').service('mvMovieService', function($http, $q, $routeParams) {
	this.getMovieById = function(cb) {
		$http.get('/api/videos/' + $routeParams.id).then(cb);
	};
	this.getMovieByCategory = function(cb) {
		$http.get('/api/category/' + $routeParams.id).then(cb);
	};
	this.searchMovie = function(cb) {
		$http.get('/api/search/' + $routeParams.id).then(cb);
	} 
});