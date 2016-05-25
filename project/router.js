angular.module('starter')

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('landing', {
    scope: {},
    url: '/',
    controllerAs: 'vm',
    templateUrl: 'templates/landing.html',
    controller: function($http, $state){
      var vm = this;
      console.log("controller connected");
      vm.signup = function(){
        var obj = {
          name: vm.username,
          password: vm.password,
          email: vm.email
        }
        $http.post('http://localhost:3000/api/v1/auth/signup', obj).then(function(res){
          console.log(res);
          //Set the token in localstorage
          $state.go('dashboard');
        });
      }
    },
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
