function dashboard($http, $state, $localStorage, dashboard){
  var vm = this;
    // body...
  dashboard.getClasses().then(function (res) {
    vm.classesArray = res.data
  })

}
