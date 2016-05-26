angular.module('graspMobile')
.factory('authInterceptor', function ($location, $localStorage, $location) {
  return {
    request: function(config) {
      if ($localStorage.token) {
        config.headers.Authorization = $localStorage.token;
      }
      return config;
    },
  }
});
