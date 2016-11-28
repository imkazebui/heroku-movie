angular.module('app').controller('mvSearchMovieCtrl', function($scope, mvMovieService) {
  mvMovieService.searchMovie(function(response){
  	var movie = response.data;
  	$scope.movies = movie;
  	if ($scope.movies.length > 0) 
  		$scope.show = true;
  	else $scope.show = false;
  	// console.log(response.data);
  	// console.log($scope.movies.length);
  })
});