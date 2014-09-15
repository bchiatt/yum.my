(function(){
  'use strict';

  angular.module('yum.my')
  .factory('Category', ['$http', function($http){

    function all(){
      return $http.get('/categories');
    }

    function add(name){
      return $http.post('/categories', {name:name});
    }

    return {all:all, add:add};
  }]);
})();

