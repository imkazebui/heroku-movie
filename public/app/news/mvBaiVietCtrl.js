angular.module('app').controller('mvBaiVietCtrl', function($scope, mvCachedCourses, $routeParams) {
  mvCachedCourses.query().$promise.then(function(collection) {
    collection.forEach(function(course) {
      if(course._id === $routeParams.id) {
        $scope.course = course;
      }
    })
  })
});