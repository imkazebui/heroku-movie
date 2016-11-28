angular.module('app').controller('mvCategoryCtrl', function($scope, mvMovieService) {
  mvMovieService.getMovieByCategory(function(response){
  	var movie = response.data;
  	$scope.movies = movie;
  	if ($scope.movies.length > 0) 
  		$scope.show = true;
  	else $scope.show = false;
  	// console.log(response.data);
  	// console.log($scope.movies.length);
  	// $scope.trailer =  $sce.trustAsResourceUrl(movie.trailer);
  	// $scope.source =  $sce.trustAsResourceUrl(movie.source)
  })
});