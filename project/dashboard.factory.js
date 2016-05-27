angular.module('graspMobile')
.factory('dashboard', function($state, $http, $localStorage){

  var lecturesArray;
  var link;

  return {
    getClasses: getClasses,
    getLectures: getLectures,
    getLecturesArray: getLecturesArray,
    getLink: getLink
  }

  function getLectures(links) {
    link = links.summary
    return $http.get(links.summary)
    .then(function(res){
      console.log('server', res);
      console.log(res.data.attributes.lectures, 'lectures array?');
      return lecturesArray = res.data.attributes.lectures
    });
  }

  function getLink() {
    return link
  }
  
  function getLecturesArray() {
    console.log('in factory', lecturesArray);
    return lecturesArray
  }

  function getClasses(){
    // return $http.get('https://panic-button-g20.herokuapp.com/api/v1/users/participations')
    return $http.get('https://panic-button-g20.herokuapp.com/api/v1/users/participations')
    .then(function(res){
      console.log(res);
      return res
    });
  }
});
