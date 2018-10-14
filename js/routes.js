angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('notenrechner', {
    url: '/page1',
    templateUrl: 'templates/notenrechner.html',
    controller: 'notenrechnerCtrl'
  })

  .state('notenpunkteSchlSsel', {
    url: '/page3',
    templateUrl: 'templates/notenpunkteSchlSsel.html',
    controller: 'notenpunkteSchlSselCtrl'
  })

  .state('notenrechner2', {
    url: '/page4',
    templateUrl: 'templates/notenrechner2.html',
    controller: 'notenrechner2Ctrl'
  })

  .state('einf', {
    url: '/einf',
    templateUrl: 'templates/einf.html'
  })

  
  .state('tour', {
     url: '/tour',
     templateUrl: 'views/tour/tour.html',
     controller: 'tourCtrl'
   });

 $urlRouterProvider.otherwise('/einf');



});
