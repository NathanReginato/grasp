function lectureViewController ($stateParams, landingPage){
    var socket = io.connect('http://Nick-MacBook-Air.local:3000');
    socket.emit('set', {lectureId: $stateParams.lecture_id, user_id:1})
    var lectureId = 1; //$state.params.id
    var status = 0;
    var vm = this;
    socket.on(lectureId, function (data) {
      console.log(data);
    })
    vm.vote = function(vote) {
      socket.emit('chart', {lectureId: $stateParams.lecture_id, user_id: landingPage.idGetter(), status_id: vote, lastStatus: status})
      console.log({lectureId: $stateParams.lecture_id, user_id: landingPage.idGetter(), status_id: vote, lastStatus: status});
      status = vote;
    }
  }
