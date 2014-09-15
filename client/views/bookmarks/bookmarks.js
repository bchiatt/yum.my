(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', 'Bookmark', 'Category', function($scope, Bookmark, Category){
    $scope.title = 'Bookmark Page';
    $scope.categories = [];

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    $scope.addCategory = function(){
      Category.add($scope.category).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.category = '';
      });
    };

  }]);
})();

