angular.module('graspMobile')
.factory('dashboard', function($state, $http, $localStorage){

  var lecturesArray;
  var lecturesLink
  var link;

  return {
    getClasses: getClasses,
    getLectures: getLectures,
    getLecturesArray: getLecturesArray,
    getLink: getLink
  }

  function getLectures(links) {
    lecturesLink = links
    getLink: getLink
  }

  function getLectures(links) {
    link = links.summary
    return $http.get(links.summary)
    .then(function(res){
      return lecturesArray = res.data.attributes.lectures
    });
  }

  function getLink() {
    return link
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
