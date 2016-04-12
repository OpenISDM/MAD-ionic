(function() {
  'use strict';

  angular
    .module('MAD')
    .controller('ListController', ListController);

  function ListController($scope, PoiService) {

    $scope.map = {
      markers: {}
    };
    /**
     * Get proximity POIs to user position from PoiService
     */
    PoiService.getPois()
      .then(function(response) {

        for (var index in response.data) {
          $scope.map.markers[response.data[index].key] = {
            lat: response.data[index].latitude,
            lng: response.data[index].longitude,
            focus: false,
            draggable: false,
            message: response.data[index].key,
            icon: {
              type: 'awesomeMarker',
              icon: 'medkit',
              markerColor: 'darkred',
              prefix: 'fa',
              iconColor: 'white'
            }
          }
        }
      }, function(err) {
        console.log('getPois error: ' + angular.toJson(err));
      });

  }

})();
