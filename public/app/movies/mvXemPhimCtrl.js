angular.module('app').controller('mvXemPhimCtrl', function($scope, mvMovieService, $sce) {
  mvMovieService.getMovieById(function(response){
  	var movie = response.data;
  	$scope.movie = movie;
  	// console.log(response.data);
  	$scope.movie = movie;
  	if ($scope.movie) 
  		$scope.show = true;
  	else $scope.show = false;
  	
  	// console.log($scope.movie);
    $scope.id = movie._id;
  	$scope.trailer =  $sce.trustAsResourceUrl(movie.trailer);
  	$scope.source =  $sce.trustAsResourceUrl(movie.source)
  })
});