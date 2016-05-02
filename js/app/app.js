var myApp = angular.module('myApp', ["jqwidgets"]);

myApp.controller("demoController", function ($scope, $http) {
    $scope.createWidget = false;
    $http({
        method: 'get',
        url: 'data/beverages.txt'
    }).success(function (data, status) {
        // prepare the data
        var source =
        {
            datatype: "json",
            datafields: [
                { name: 'name', type: 'string' },
                { name: 'type', type: 'string' },
                { name: 'calories', type: 'int' },
                { name: 'totalfat', type: 'string' },
                { name: 'protein', type: 'string' }
            ],
            id: 'id',
            localdata: data
        };
        var dataAdapter = new $.jqx.dataAdapter(source);
        $scope.gridSettings =
        {
            width: 850,
            source: dataAdapter,
            columnsresize: true,
            columns: [
              { text: 'Name', datafield: 'name', width: 250 },
              { text: 'Beverage Type', datafield: 'type', width: 250 },
              { text: 'Calories', datafield: 'calories', width: 180 },
              { text: 'Total Fat', datafield: 'totalfat', width: 120 },
              { text: 'Protein', datafield: 'protein', minwidth: 120 }
            ]
        };
        $scope.createWidget = true;
    }).error(function (data, status) {
        // Some error occurred
    });
});
