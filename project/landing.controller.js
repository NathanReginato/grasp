function landingController($http, $state, $localStorage){
    var vm = this;
    console.log("controller connected");
    vm.signup = function(){
      var obj = {
        name: vm.username,
        password: vm.password,
        email: vm.email
      }
      $http.post('http://localhost:3000/api/v1/auth/signup', obj).then(function(res){
        console.log(res);
        $localStorage.$default({ token: res.data.token })
        $state.go('dashboard');
      });
    }
  }
