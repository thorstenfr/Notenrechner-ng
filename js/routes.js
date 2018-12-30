angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('menu.notenrechner', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notenrechner.html',
        controller: 'notenrechnerCtrl'
      }
    }
  })

  .state('menu.berechnungshinweise', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/berechnungshinweise.html',
        controller: 'berechnungshinweiseCtrl'
      }
    }
  })

  .state('menu.notenpunkteSchlSsel', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/notenpunkteSchlSsel.html',
        controller: 'notenpunkteSchlSselCtrl'
      }
    }
  })
  .state('menu.punkteliste', {
    url: '/page4',
    views: {
      'side-menu21': {
        templateUrl: 'templates/punkteliste.html',
        controller: 'punktelisteCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

$urlRouterProvider.otherwise('/side-menu21/page1')


});