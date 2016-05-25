angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('landing', {
    scope: {},
    url: '/',
    controllerAs: 'vm',
    templateUrl: 'templates/landing.html',
    controller: landingController,
  })
  .state('dashboard', {
    scope: {},
    url: '/dashboard',
    controllerAs: 'vm',
    templateUrl: 'templates/dashboard.html',
    controller: function($http){
      var vm = this;
      console.log("dashboard controller connected");
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
