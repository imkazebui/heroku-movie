angular.module('app').directive('sidebardirective', function($document) {

  return {
    restrict: 'E',
    // require: '?ngModel',
    templateUrl: './app/common/sidebar.jade',
    replace: true,
    link: function(scope, element, attr){
      
        scope.isPopupVisible = false;

        scope.clickButtonAdmin = function(){
          scope.isPopupVisible = !scope.isPopupVisible;
        }

        $document.bind('click', function(event){
          var isClickedElementChildOfPopup = element
            .find(event.target)
            .length > 0;
            
          if (isClickedElementChildOfPopup)
            return;
            
          scope.isPopupVisible = false;
          scope.$apply();
        });
    }
  };

});