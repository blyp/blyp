app.controller('header.controller', [
    '$scope',
    '$rootScope',
    '$location',
    '$window',
    '$routeParams',
    '$route',
    '$filter', function($scope, $rootScope, $location, $window, $routeParams, $route, $filter) {

    $scope.path = $location.path();
    
    console.log("headerController");

}]);
