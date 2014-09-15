(function(){
  'use strict';

  angular.module('yum.my')
  .controller('LoginCtrl', ['$scope', '$location', 'User', function($scope, $location, User){
    $scope.title = 'Login Page';
    $scope.user = {};

    function success(response){
      toastr.success('Successful login.');
      $location.path('/');
    }

    function failure(response){
      toastr.error('Error during login, please try again.');
      $scope.user = {};
    }

    $scope.login = function(){
      User.login($scope.user).then(success, failure);
    };
  }]);
})();

