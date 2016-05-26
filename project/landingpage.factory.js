angular.module('graspMobile')
.factory('landingPage', function($state, $http, $localStorage){

  return {
    signUp: signUp,
    logIn: logIn
  }

  function signUp(obj){
    // return $http.post('https://panic-button-g20.herokuapp.com/api/v1/auth/signup', obj)
    return $http.post('http://localhost:3000/api/v1/auth/signup', obj)
    .then(function(res){
      return res
    });
  }

  // 'https://panic-button-g20.herokuapp.com/api/v1/auth/signup'

  function logIn(obj){
    // return $http.post('https://panic-button-g20.herokuapp.com/api/v1/auth/login', obj)
    return $http.post('http://localhost:3000/api/v1/auth/login', obj)
    .then(function(res){
      return res
    });
  }

  // 'https://panic-button-g20.herokuapp.com/api/v1/auth/login'
});
