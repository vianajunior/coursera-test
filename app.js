(function() {
'use strict'
  angular.module('LunchCheckApp', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.resultMessage = '';
    $scope.checkDishes = function() {
      if ($scope.dishes === '') {
        $scope.resultMessage = 'Please enter data first';
      }
      else {
        var dishes = $scope.dishes.split(',');
        $scope.resultMessage = (dishes.length > 3) ? 'Too much!' : 'Enjoy!';
      }
    }
  }

})();
