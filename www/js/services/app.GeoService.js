(function() {
  'use strict';

  angular
    .module('MAD')
    .factory('GeoService', GeoService);

  function GeoService($ionicPlatform, $cordovaGeolocation) {

    var positionOptions = {
      timeout: 10000,
      enableHighAccuracy: false
    };

    return {
      getPosition: function() {
        return $ionicPlatform.ready()
          .then(function() {
            return $cordovaGeolocation.getCurrentPosition(positionOptions);
          })
      }
    };
  }

})();
