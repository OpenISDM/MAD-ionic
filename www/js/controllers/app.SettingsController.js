(function() {
  'use strict';

  angular
    .module('MAD')
    .controller('SettingsController', SettingsController);

  function SettingsController($scope) {
    $scope.settings = {
      enableNotification: true
    };
  }
})();
