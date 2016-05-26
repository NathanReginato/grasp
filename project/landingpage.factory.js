angular.module('graspMobile')
.factory('landingPage', function($state, $http, $localStorage){

  return {
    signUp: signUp,
    logIn: logIn,
    logOut: logOut
  }

  function signUp(obj){
    // return $http.post('https://panic-button-g20.herokuapp.com/api/v1/auth/signup', obj)
    return $http.post('https://panic-button-g20.herokuapp.com/api/v1/auth/signup', obj)
    .then(function(res){
      return res
    });
  }

  // 'https://panic-button-g20.herokuapp.com/api/v1/auth/signup'

  function logIn(obj){
    // return $http.post('https://panic-button-g20.herokuapp.com/api/v1/auth/login', obj)
    return $http.post('https://panic-button-g20.herokuapp.com/api/v1/auth/login', obj)
    .then(function(res){
      return res
    });
  }

  function logOut() {
    $localStorage.$reset()
    $state.go('landing')
  }

  // 'https://panic-button-g20.herokuapp.com/api/v1/auth/login'
});
