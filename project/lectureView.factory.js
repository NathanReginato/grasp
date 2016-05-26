angular.module('graspMobile')
.factory('lectureView', function($state, $http, $localStorage){

  var classId;

  return {
    swipe: swipe,
  }

  //view changing on each swipe
  //socket send for each vote
  function swipe(){
    console.log("swiper no swiping");
  }


});
