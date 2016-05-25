angular.module('graspMobile')

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
    controller: dashboard,
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
