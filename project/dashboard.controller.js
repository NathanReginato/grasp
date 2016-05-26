function dashboard($http, $state, $localStorage, dashboard, landingPage){
  var vm = this;
    // body...
  dashboard.getClasses().then(function (res) {
    vm.classesArray = res.data
  })

  vm.viewlectures = function(links){
    dashboard.getLectures(links)
    $state.go('lectures');
  }

  vm.refresh = function(){
    dashboard.getClasses().then(function (res) {
      vm.classesArray = res.data
    })
  }

  vm.logOut = function() {
    landingPage.logOut()
  }
}
