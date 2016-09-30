angular.module('chatroom').controller('mainCtrl', function($scope, messageService){
  


$scope.getMessages = function() {
  messageService.getMessages().then(function(response) {
    $scope.messages = response.data
  })
}

$scope.getMessages();



  //The postMessage function will take whatever the user typed in (hint: look at the html and see what ng-model correlates to on the input box) //pass that text to the postMessage method on the messageService object which will then post it to the backend.


$scope.postMessage = function(text) {
  messageService.postMessage(text).then(function(response){
    $scope.messages();
    $scope.messages = '';
  })
}


  setInterval(function(){
    $scope.getMessages();
  }, 1500)
})
