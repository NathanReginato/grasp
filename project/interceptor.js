angular.module('graspMobile')
.factory('authInterceptor', function ($location, $localStorage, $location) {
  return {
    request: function(config) {
      if ($localStorage.token) {
        config.headers.Authorization = 'Bearer ' + $localStorage.token;
      }
      return config;
    },
  }
});
