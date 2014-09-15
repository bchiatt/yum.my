(function(){
  'use strict';

  angular.module('yum.my')
  .controller('RegisterCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.title = 'Registration Page';
    $scope.user = {};

    function success(response){
      toastr.success('User successfully registered.');
      $location.path('/login');
    }

    function failure(response){
      toastr.error('Error during user registration, please try again.');
      $scope.user = {};
    }

    $scope.register = function(){
      User.register($scope.user).then(success, failure);
    };
  }]);
})();
