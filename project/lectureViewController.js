function lectureViewController ($stateParams, lectureView, landingPage){
    var vm = this;
    var socket = io.connect('http://Nick-MacBook-Air.local:3000');
    var lecture_id = 1;
    var status;
    var user_id = lectureView.getId();

    socket.emit('set', {lecture_id: $stateParams.lecture_id, user_id:user_id, status_id: status})
    socket.on(lecture_id, function (data) {
      console.log(data);
    })
    vm.vote = function() {
      var vote = parseInt(vm.slider)
      socket.emit('chart', {lecture_id: $stateParams.lecture_id, user_id: user_id, status_id: vote, lastStatus: status})
      console.log({lecture_id: $stateParams.lecture_id, user_id: user_id, status_id: vote, lastStatus: status});
      status = vote;
    }

    vm.logOut = function() {
      landingPage.logOut()
    }
  }
