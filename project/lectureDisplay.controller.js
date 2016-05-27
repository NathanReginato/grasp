function lectureDisplay($http, $state, $localStorage, dashboard, landingPage){
  var vm = this;
  vm.link
    // body...

  vm.lecturesArray = dashboard.getLecturesArray()

  vm.goToLecture = function(lecture_id) {
    $state.go('lectureView', {lecture_id:lecture_id})
  }

  vm.refresh = function(){
    dashboard.getLectures(dashboard.getLectureLinks());
  }

  vm.logOut = function() {
    landingPage.logOut()
  }
}
