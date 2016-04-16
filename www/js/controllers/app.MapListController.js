(function() {
  'use strict';

  angular
    .module('MAD')
    .controller('MapListController', MapListController);

  function MapListController($scope, PoiService, GeoService, leafletData) {

    /**
     * init a map object for map view
     */
    $scope.map = {
      defaults: {
        tileLayer: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
        maxZoom: 18,
        zoomControlPosition: 'bottomleft'
      },
      center: {},
      markers: {}
    };

    /**
     * Get user position from GeoService
     */
    GeoService.getPosition()
      .then(function(position) {

        $scope.map.center = {
          // lat: position.coords.latitude,
          // lng: position.coords.longitude,
          lat: 22.992909,
          lng: 113.064301,
          zoom: 13
        }

        $scope.map.markers['userLocation'] = {
          // lat: position.coords.latitude,
          // lng: position.coords.longitude,
          lat: 22.992909,
          lng: 113.064301,
          message: "You Are Here",
          focus: true,
          draggable: false,
          icon: {
            type: 'awesomeMarker',
            iconColor: 'white',
            icon: 'star',
            markerColor: 'blue',
            spin: true,
            prefix: 'fa'
          }
        };

      }, function(err) {
        console.log('getCurrentPosition error: ' + angular.toJson(err));
      });

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

    /**
     * Create a Leaflet Routing Machine on Map layer
     */
    console.log('routing');
    // $scope.routing = function() {
    leafletData.getMap().then(function(map) {
      console.log('leafletData.getMap()');
      $scope.routingControl = L.Routing.control({
        waypoints: [],
        createMarker: function() {
          return null;
        },
        routeWhileDragging: true,
        fitSelectedRoutes: 'fit'
      }).addTo(map);
      $scope.routingControl.hide();
    });
    // };

    /**
     * moving to marker
     */
    $scope.moveToMarker = function(marker) {
      $scope.routingControl.getPlan().setWaypoints([
        L.latLng($scope.map.markers['userLocation'].lat, $scope.map.markers['userLocation'].lng),
        L.latLng(marker.lat, marker.lng)
      ]);
    };
  }

})();
