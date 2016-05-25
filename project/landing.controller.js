function landingController($http, $state, $localStorage, landingPage){
    var vm = this;
    console.log("controller connected");
    vm.signup = function(){
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
        console.log(res.data.errors);
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
