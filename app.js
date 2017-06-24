'use strict';

angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap', 'ui.mask','ngLocale']);
angular.module('ui.bootstrap.demo').controller('DatepickerPopupDemoCtrl', function ($scope) {
  $scope.dateOptions = {
    formatYear: 'yyyy',
    maxDate: new Date(2020, 5, 22),
    showWeeks: false,
    //minDate: new Date(),
    startingDay: 0
  };

  $scope.toggleMin = function() {
    $scope.dateOptions.minDate = $scope.dateOptions.minDate? null : new Date();
  };

  //$scope.toggleMin();

  $scope.open1 = function() {
    $scope.popup1.opened = true;
  };

  $scope.setDate = function(year, month, day) {
    $scope.dt = new Date(year, month, day);
  };

  $scope.format = 'dd/MM/yyyy';

  $scope.popup1 = {
    opened: false
  };

  var tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  var afterTomorrow = new Date();
  afterTomorrow.setDate(tomorrow.getDate() + 1);
  $scope.events = [
    {
      date: tomorrow,
      status: 'full'
    },
    {
      date: afterTomorrow,
      status: 'partially'
    }
  ];
});