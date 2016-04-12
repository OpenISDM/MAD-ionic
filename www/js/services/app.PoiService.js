(function() {
  'use strict';

  angular
    .module('MAD')
    .factory('PoiService', PoiService);

  function PoiService($http, $q, GeoService) {

    return {
      getPois: function() {
        var deferred = $q.defer();

        GeoService.getPosition()
          .then(function(position) {

            var options = {
              url: 'api/poi/proximity',
              method: "GET",
              params: {
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                dist: 5
              }
            }

            $http(options).then(function(response) {
              deferred.resolve(response);
            });

          }, function(err) {
            console.log('getCurrentPosition error: ' + angular.toJson(err));
            deferred.reject(err);
          })

          return deferred.promise;
      }

    }
  }

})();
