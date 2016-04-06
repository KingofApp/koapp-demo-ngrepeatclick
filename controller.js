(function() {
  'use strict';

  angular
    .module('ngrepeatclick', [])
    .controller('ngrepeatclickController', loadFunction);

  loadFunction.$inject = ['$scope', 'structureService', '$location'];

  function loadFunction($scope, structureService, $location) {
    //Register upper level modules
    structureService.registerModule($location, $scope, 'ngrepeatclick');

    $scope.list = ["post1", ['Elem1', 'Elem2'], 13, {
      'key': 'value',
      'key2': 'value2'
    }];

    $scope.variable = "Content";

    $scope.test = function(varX, varX1, varX2) {
      if (varX.key) {
        console.log("0--Json-->", varX.key);
      } else if (_.isArray(varX)) {
        console.log("0--Array-->", varX[0]);
      }else{
        console.log("0-------->", varX);
      }


      console.log("1-------->", varX1);
      console.log("2-------->", varX2);
    }
  }

}());
