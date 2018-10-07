"use strict";

angular.module('dsApp')
  .controller('VolListAllCtrl', function ($scope,$http) {
    console.log('this is the homepage');

    $http.post('http://localhost:3000/getVolAll').then(result=>{
      console.log("aasdasd",result);
      $scope.volList = result.data.data;
      // $scope.orig =
    }).catch(error=>{
      console.log("error is ",error);
    });

    $scope.recruit = (obj)=>{
      console.log(obj);
      $scope.volList.map((vol,ind)=>{
        if (vol === obj){
          $scope.volList[ind].recruited = ($scope.volList[ind].recruited === 'N')?'Y':'N';
          console.log($scope.volList[ind]);
        }
      });
    };

  });
