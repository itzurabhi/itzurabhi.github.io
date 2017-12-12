var app = angular.module('Printer', []);
app.controller('PrintController', function($scope) {
    $scope.TotalPageCount = 10;
    $scope.Pages = Array($scope.TotalPageCount);
    $scope.ItemsPerPage = 28;

    $scope.PageItems = Array($scope.ItemsPerPage);
    $scope.Items = [{
        NumberCol: 0,
        TitleCol: "Title Even",
        ThirdCol: "Some Detail"
    }, {
        NumberCol: 1,
        TitleCol: "Title Odd",
        ThirdCol: "Some Detail"
    }];


});