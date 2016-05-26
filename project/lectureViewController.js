function lectureViewController ($stateParams, landingPage){
    var socket = io.connect('http://Nick-MacBook-Air.local:3000');
    socket.emit('set', {lecture_id: $stateParams.lecture_id, user_id:1})
    var lecture_id = 1; //$state.params.id
    var status = 0;
    var vm = this;
    socket.on(lecture_id, function (data) {
      console.log(data);
    })
    vm.vote = function(vote) {
      socket.emit('chart', {lecture_id: $stateParams.lecture_id, user_id: landingPage.idGetter(), status_id: vote, lastStatus: status})
      console.log({lecture_id: $stateParams.lecture_id, user_id: landingPage.idGetter(), status_id: vote, lastStatus: status});
      status = vote;
    }
  }
