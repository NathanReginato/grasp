function lectureDisplay($http, $state, $localStorage, dashboard, landingPage){
  var vm = this;
  vm.link = dashboard.getLink();
    // body...

  vm.lecturesArray = dashboard.getLecturesArray()
  console.log('lectures in controller', vm.lecturesArray)

  vm.goToLecture = function(lecture_id) {
    console.log(lecture_id);
    $state.go('lectureView', {lecture_id:lecture_id})
  };

  vm.refresh = function(){
    console.log('in refresh bish', vm.link);
    return $http.get(vm.link)
      .then(function(res){
        console.log('server give me a lecture refresh bish', res);
        console.log(res.data.attributes.lectures, 'lectures array?');
        return lecturesArray = res.data.attributes.lectures
      });
  };

  vm.logOut = function() {
    landingPage.logOut()
  }
}
