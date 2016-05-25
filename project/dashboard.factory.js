angular.module('graspMobile')
.factory('dashboard', function($state, $http, $localStorage){

  return {
    getClasses: getClasses,
  }


  function getClasses(obj){
    console.log('calling egte');
    return $http.get('http://localhost:3000/api/v1/users/participations')
    .then(function(res){
      console.log(res);
      return res
    });
  }
});
