(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Bookmark', ['$http', function($http){

    function all(){
      return $http.get('/bookmarks');
    }

    function add(bookmark){
      return $http.post('/bookmarks', bookmark);
    }

    return {all:all, add:add};
  }]);
})();

