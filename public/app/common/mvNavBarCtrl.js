angular.module('app').controller('mvNavBarCtrl', function($scope, mvUser, $http, mvIdentity, mvNotifier, mvAuth, $location, $timeout, ezfb, $window ) {
  
  $scope.identity = mvIdentity;
  $scope.role = 'admin';
  $scope.valueSearch="";

  // $scope.isHide = true;

  // $scope.clickButtonAdmin = function() {
  //   $scope.isHide = !$scope.isHide;
  //   // console.log($scope.isHide);
  // }

  $scope.signin = function(username, password) {
    mvAuth.authenticateUser(username, password).then(function(success) {
      if(success) {
        mvNotifier.notify('You have successfully signed in!');
      } else {
        mvNotifier.notify('Username/Password combination incorrect');
      }
      // console.log($scope.identity.isAuthorized($scope.role));
    });
  }

  $scope.signout = function() {
    mvAuth.logoutUser().then(function() {
      $scope.username = "";
      $scope.password = "";
      mvNotifier.notify('You have successfully signed out!');
      $location.path('/');
    })
  }
  $scope.signup = function() {
    var newUserData = {
      username: $scope.email,
      password: $scope.password,
      // firstName: $scope.fname,
      // lastName: $scope.lname
      firstName: 'User',
      lastName: ' '
      // roles: 'admin'
    };

    mvAuth.createUser(newUserData).then(function() {
      mvNotifier.notify('User account created!');
      $location.path('/');
    }, function(reason) {
      // console.log('Ly do: ' + reason);
      mvNotifier.error(reason);
    })
  }

  $scope.signinFacebook = function() {
    FB.login(function(response) {
        if (response.authResponse) {
         console.log('Welcome!  Fetching your information.... ');
         FB.api('/me', function(response) {
           console.log('Good to see you, ' + response.name + '.');
         });
        } else {
         console.log('User cancelled login or did not fully authorize.');
        }
    });
  };

  $scope.search = function() {
    $location.path('/timkiem/' + $scope.valueSearch);
  };
  // $("#search").keypress(function(event){
  //   var keycode = (event.keyCode ? event.keyCode : event.which);
  //   if (keycode == '13') {
      
  //     // console.log($location.path('/timkiem/' + $scope.valueSearch));
  //     // alert($scope.valueSearch);
  //     $scope.valueSearch="";
  //   }
  // });
});