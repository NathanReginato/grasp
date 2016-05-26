angular.module('graspMobile')
.factory('dashboard', function($state, $http, $localStorage){

  return {
    getClasses: getClasses,
  }

  function getClasses(obj){
    // return $http.get('https://panic-button-g20.herokuapp.com/api/v1/users/participations')
    return $http.get('http://localhost:3000/api/v1/users/participations')
    .then(function(res){
      console.log(res);
      return res
    });
  }
});
