'use strict';

/**
 * @ngdoc function
 * @name dsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the dsApp
 */
angular.module('dsApp')
  .controller('OrgSignUpCtrl', function ($scope,$http) {
    $scope.org = {};

    $scope.type = {};
    $scope.resourse = {};

    $scope.signUp = ()=>{
      $scope.org['type'] = Object.keys($scope.type);
      $scope.org['resourse'] = Object.keys($scope.resourse);
      console.log("the fields are ",$scope.org);
      $http.post('http://localhost:3000/orgSignUp',{data:$scope.org}).then(result=>{
        console.log("the result uis ",result);
      }).catch(error=>{
        console.log("the error is ",error);
      });
    };
    console.log("this is org signup form");

  });
