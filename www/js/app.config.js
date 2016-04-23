(function() {
  'use strict';

  angular
    .module('MAD')
    .config(config);

  function config($stateProvider, $urlRouterProvider) {
    $stateProvider

      .state('tab', {
      url: '/tab',
      abstract: true,
      templateUrl: 'templates/tabs.html',
      controller: 'MapListController'

    })

    .state('tab.map', {
      url: '/map',
      views: {
        'tab-map': {
          templateUrl: 'templates/tab-map.html'
        }
      }
    })

    .state('tab.list', {
      url: '/list',
      views: {
        'tab-list': {
          templateUrl: 'templates/tab-list.html'
        }
      }
    })

    $urlRouterProvider.otherwise('/tab/map');

  }

})();
