function landingController($http, $state, $localStorage, landingPage){
    var vm = this;
    console.log("controller connected");
    vm.signup = function(){
      vm.signup.errors = []
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
          vm.signup.errors.push(elem)
        })
      })
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
