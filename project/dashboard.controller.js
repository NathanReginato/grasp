function dashboard($http, $state, $localStorage, dashboard, landingPage){
  var vm = this;
  dashboard.getClasses().then(function (res) {
    vm.classesArray = res.data
  })

  vm.viewlectures = function(links){
    dashboard.getLectures(links).then(function () {
      $state.go('lectures');
    })
  }

  vm.refresh = function(link){
    dashboard.getClasses(link).then(function (res) {
      vm.classesArray = res.data
    })
  }

  vm.logOut = function() {
    landingPage.logOut()
  }
}
