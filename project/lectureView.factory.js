angular.module('graspMobile')
.factory('lectureView', function($state, $http, $localStorage){

  var user_id

  return {
    getMe: getMe,
    getId: getId
  }

  //view changing on each swipe
  //socket send for each vote
  function getMe(){
    // return $http.get('https://panic-button-g20.herokuapp.com/api/v1/auth/me', obj)
    return $http.get('http://localhost:3000/api/v1/auth/me')
    .then(function(res){
      console.log('getme', res.data.id);
      user_id= res.data.id 
    });
  }

  function getId() {
    return user_id
  }


});
