angular.module('app', ['ngResource', 'ngRoute', 'ezfb']);

angular.module('app').config(function(ezfbProvider, $routeProvider, $locationProvider) {
  var routeRoleChecks = {
    admin: {auth: function(mvAuth) {
      return mvAuth.authorizeCurrentUserForRoute('admin')
    }},
    user: {auth: function(mvAuth) {
      return mvAuth.authorizeAuthenticatedUserForRoute()
    }}
  };

  // Config facebook
  ezfbProvider.setInitParams({
    appId: '602219043296267',
    version: 'v2.8'
  });

  ezfbProvider.setLocale('vi_VN');

  $locationProvider.html5Mode(true);
  $routeProvider
      .when('/', { templateUrl: '/partials/main/main', controller: 'mvMainCtrl'})
      // .when('/admin/users', { templateUrl: '/partials/admin/user-list',
      //   controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
      // })
      .when('/admin/dashboard', { templateUrl: '/partials/admin/dashboard',
        controller: 'mvAdminDashboardCtrl', resolve: routeRoleChecks.admin
      })
      // .when('/signup', { templateUrl: '/partials/account/signup',
      //   controller: 'mvSignupCtrl'
      // })
      .when('/profile', { templateUrl: '/partials/account/profile',
        controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
      })
      .when('/tintuc', { templateUrl: '/partials/news/tin-tuc',
        controller: 'mvTinTucCtrl'
      })
      .when('/tintuc/:id', { templateUrl: '/partials/news/bai-viet',
        controller: 'mvBaiVietCtrl'
      })
      .when('/timkiem/:id', { templateUrl: '/partials/movies/search-movie',
        controller: 'mvSearchMovieCtrl'
      })
      .when('/category/:id', { templateUrl: '/partials/movies/category',
        controller: 'mvCategoryCtrl'
      })
      .when('/xemphim/:id', { templateUrl: '/partials/movies/xem-phim',
        controller: 'mvXemPhimCtrl'
      })

});

angular.module('app').run(function($rootScope, $location) {
  $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
    if(rejection === 'not authorized') {
      $location.path('/');
    }
  })
})
