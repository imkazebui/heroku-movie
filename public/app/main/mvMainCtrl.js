angular.module('app').controller('mvMainCtrl', function($scope, mvMainService) {
	mvMainService.getHome(function (response) {
		var home = response.data;
		// $scope.home = home;
		// console.log(response);
		
		$scope.comes = home.comming._65;

		// $scope.come1 = home.comming._65.slice(0,2);
		// $scope.come2 = home.comming._65.slice(3,5);
		// $scope.come3 = home.comming._65.slice(6,8);

		$scope.suggests = home.suggest._65;
		// $scope.suggest1 = home.suggest._65.slice(0,2);
		// $scope.suggest2 = home.suggest._65.slice(3,5);
		// $scope.suggest3 = home.suggest._65.slice(6,8);

		$scope.trichdoans = home.trichdoan._65;
		// $scope.trichdoan1 = home.trichdoan._65.slice(0,2);
		// $scope.trichdoan2 = home.trichdoan._65.slice(3,5);
		// $scope.trichdoan3 = home.trichdoan._65.slice(6,8);
	});
});