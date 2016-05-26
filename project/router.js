angular.module('graspMobile')

.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
  $httpProvider.interceptors.push("authInterceptor");

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
  .state('lectureView', {
    scope: {},
    url: '/lectureview/:id',
    params: {lecture_id: null},
    controllerAs: 'vm',
    templateUrl: 'templates/lectureView.html',
    controller: lectureViewController,
    resolve: {
      user: function(lectureView) {
        return lectureView.getMe()
      }
    }
  })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});
