function landingController($http, $state, $localStorage, landingPage){
    var vm = this;
    console.log("controller connected");
    vm.signup = function(){
      vm.signup.errors = []
      if (!vm.signup.username) { vm.signup.errors.push('please enter your name') }
      if (!vm.signup.password) { vm.signup.errors.push('please enter your password') }
      if (!vm.signup.email) { vm.signup.errors.push('please enter your email') }
      var obj = {
        name: vm.signup.username,
        password: vm.signup.password,
        email: vm.signup.email
      }
      if (vm.signup.errors.length === 0) {
        landingPage.signUp(obj)
        .then(function(res){
          $localStorage.$default({ token: res.data.token })
          $state.go('dashboard');
        }).catch(function(res){
          console.log('this is the catch');
          res.data.errors.forEach(function(elem){
          vm.signup.errors.push(elem)
          })
        })
      }
    }

    vm.login = function(){
      vm.login.errors = []
      var obj = {
        password: vm.login.password,
        email: vm.login.email
      }
      landingPage.logIn(obj).then(function (res) {
        console.log(res);
        $localStorage.$default({ token: res.data.token })
        $state.go('dashboard');
      }).catch(function(res){
        res.data.errors.forEach(function(elem){
          vm.login.errors.push(elem)
        })
      })
    }
  }
