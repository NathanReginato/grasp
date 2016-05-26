function lectureDisplay($http, $state, $localStorage, dashboard, landingPage){
  var vm = this;
    // body...

  vm.lecturesArray = dashboard.getLecturesArray()
  console.log('lectures in controller', vm.lecturesArray)

  vm.goToLecture = function(lecture_id) {
    console.log(lecture_id);
    $state.go('lectureView', {lecture_id:lecture_id})
  }
  //
  // vm.refresh = function(){
  //   dashboard.getClasses().then(function (res) {
  //     vm.classesArray = res.data
  //   })
  // }

  vm.logOut = function() {
    landingPage.logOut()
  }
}
