function dashboard($http, $state, $localStorage, dashboard){
  var vm = this;
    // body...
  dashboard.getClasses().then(function (res) {
    vm.classesArray = res.data
  })

  vm.joinlecture = function(id){
    var lecId = id
    console.log(id);
    $state.go('lectureView', {lecture_id:lecId});
  }
}
