angular.module('graspMobile')
.factory('dashboard', function($state, $http, $localStorage){

  var lecturesArray;
  var lecturesLink

  return {
    getClasses: getClasses,
    getLectures: getLectures,
    getLecturesArray: getLecturesArray,
    getLectureLinks: getLectureLinks
  }

  function getLectures(links) {
    lecturesLink = links
    return $http.get(links.summary)
    .then(function(res){
      return lecturesArray = res.data.attributes.lectures
    });
  }

  function getLecturesArray() {
    return lecturesArray
  }

  function getLectureLinks() {
    return lecturesLink
  }

  function getClasses(){
    // return $http.get('https://panic-button-g20.herokuapp.com/api/v1/users/participations')
    return $http.get('https://panic-button-g20.herokuapp.com/api/v1/users/participations')
    .then(function(res){
      return res
    });
  }
});
