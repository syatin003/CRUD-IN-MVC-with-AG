var app = angular.module('myApp', []);
app.controller('myCntrl1', function ($scope, $http) {
    getAllCounry();
    function getAllCounry() {
        $http({
            method: 'Get',
            url: '/Home/GetCountry'
        }).success(function (data) {
            $scope.countryList = data;
        }).error(function () {
            $scope.errorMessage = 'Not found';
        });
    }

    $scope.GetStatesList = function () {
        var getCountry = $scope.Country;
        if (getCountry) {           // Check here country Id is null or not
            $http({
                method: 'POST',
                url: '/Home/GetStateByCountryId/',
                data: JSON.stringify({ CountryId: getCountry.CountryId })
            }).success(function (data) {
                $scope.stateList = data;
            }).error(function (data) {
                alert(data.message);
                $scope.message = 'not found';
            });
        }
        else {
            $scope.stateList = null;
        }
    }
    $scope.GetCitiesList = function () {
        var getState = $scope.State;
        if (getState) {           // Check here country Id is null or not
            $http({
                method: 'POST',
                url: '/Home/GetCityByStateId/',
                data: JSON.stringify({ StateId: getState.StateId })
            }).success(function (data) {
                $scope.cityList = data;
            }).error(function (data) {
                alert(data.message);
                $scope.message = 'not found';
            });
        }
        else {
            $scope.cityList = null;
        }
    }
});