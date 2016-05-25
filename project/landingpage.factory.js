angular.module('graspMobile')
.factory('landingPage', function($state, $http, $localStorage){

  return {
    signUp: signUp,
    logIn: logIn
  }

  function signUp(obj){
    return $http.post('http://localhost:3000/api/v1/auth/signup', obj)
    .then(function(res){
      return res
    });
  }

  // 'https://panic-button-g20.herokuapp.com/api/v1/auth/signup'

  function logIn(obj){
    $http.post('https://panic-button-g20.herokuapp.com/api/v1/auth/login', obj).then(function(res){
      console.log(res);
      $localStorage.$default({ token: res.data.token })
      $state.go('dashboard');
    });
  }
});
