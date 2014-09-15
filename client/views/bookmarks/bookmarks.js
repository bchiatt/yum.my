(function(){
  'use strict';

  angular.module('yum.my')
  .controller('BookmarksCtrl', ['$scope', 'Bookmark', 'Category', function($scope, Bookmark, Category){
    $scope.title = 'Bookmark Page';
    $scope.categories = [];
    $scope.bookmarks = [];
    $scope.filter = 'test';
    $scope.sort = 'name';

    Category.all().then(function(response){
      $scope.categories = response.data.categories;
    });

    Bookmark.all().then(function(response){
      $scope.bookmarks = response.data.bookmarks;
    });

    $scope.addCategory = function(){
      Category.add($scope.name).then(function(response){
        $scope.categories.push(response.data.category);
        $scope.name = '';
      });
    };

    $scope.addBookmark = function(){
      Bookmark.add($scope.bookmark).then(function(response){
        $scope.bookmarks.push(response.data.bookmark);
        $scope.bookmark = {};
      });
    };
  }]);
})();

