"use strict";

angular.module('dsApp')
  .controller('VolListCtrl', function ($scope,$http) {
    console.log('this is the homepage');

    $http.post('http://localhost:3000/getVol').then(result=>{
      console.log("aasdasd",result);
      $scope.volList = result.data.data;
      // $scope.orig =
    }).catch(error=>{
      console.log("error is ",error);
    });

    // $scope.search = ()=>{
    //   if($scope.searchVol.length > 2){
    //     $scope.volList = $scope.volList.filter(vol=>{
    //       if(vol.skill.indexOf($scope.searchVol) > -1){
    //         return vol;
    //       }
    //     });
    //   }
    // };

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
