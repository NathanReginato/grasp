function lectureDisplay($http, $state, $localStorage, dashboard, landingPage){
  var vm = this;
    // body...

  vm.lecturesArray = dashboard.getLecturesArray().then(function () {
    
  })
  console.log('lectures in controller', vm.lecturesArray)

  // vm.joinlecture = function(id){
  //   var lecId = id
  //   console.log(id);
  //   $state.go('lectureView', {lecture_id:lecId});
  // }
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
