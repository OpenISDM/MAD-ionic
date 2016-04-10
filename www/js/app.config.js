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
      templateUrl: 'templates/tabs.html'
    })

    .state('tab.map', {
        url: '/map',
        views: {
          'tab-map': {
            templateUrl: 'templates/tab-map.html',
            controller: 'MapController'
          }
        }
      })

      .state('tab.list', {
        url: '/list',
        views: {
          'tab-list': {
            templateUrl: 'templates/tab-list.html',
            controller: 'ListController'
          }
        }
      })

    .state('tab.setting', {
      url: '/setting',
      views: {
        'tab-setting': {
          templateUrl: 'templates/tab-setting.html',
          controller: 'SettingsController'
        }
      }
    });

    $urlRouterProvider.otherwise('/tab/map');

  }

})();
