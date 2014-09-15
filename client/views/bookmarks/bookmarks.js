(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', 'Bookmark', function($scope, Bookmark){
    $scope.title = 'Bookmark Page';

  }]);
})();

