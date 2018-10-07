"use strict"

angular.module('dsApp')
  .controller('volunteerCtrl',function ($scope,$http,$state) {
    $scope.vol = {};


    $scope.register = ()=>{
      console.log(" the data is ",$scope.vol);
      $http.post('http://localhost:3000/test',{'data':$scope.vol}).then(result=>{
        console.log("result is ",result);
        $state.go('home');
      }).catch(error=>{
        console.log("error is ",error);
      });
    };
    console.log('this is the volunteer');
  });


