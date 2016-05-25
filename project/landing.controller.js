function landingController($http, $state, $localStorage, landingPage){
    var vm = this;
    vm.errors = []
    console.log("controller connected");
    vm.signup = function(){
      vm.errors = []
      var obj = {
        name: vm.signup.username,
        password: vm.signup.password,
        email: vm.signup.email
      }
      landingPage.signUp(obj)
      .then(function(res){
        $localStorage.$default({ token: res.data.token })
        $state.go('dashboard');
      }).catch(function(res){
      console.log('this is the catch');
        res.data.errors.forEach(function(elem){
          vm.errors.push(elem)
        })
      })
    }

    vm.login = function(){
      var obj = {
        password: vm.login.password,
        email: vm.login.email
      }
      landingPage.logIn(obj)
    }
  }
