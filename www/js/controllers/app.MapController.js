(function() {
  'use strict';

  angular
    .module('MAD')
    .controller('MapController', MapController);

  function MapController($scope

  ) {

    $scope.map = {
      defaults: {
        tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        maxZoom: 19,
        zoomControlPosition: 'bottomleft'
      },
      center: {},
      markers: {},
      events: {
        map: {
          enable: ['context'],
          logic: 'emit'
        }
      }
    };



  }

})();
