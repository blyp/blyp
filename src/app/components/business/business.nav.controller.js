app.controller('business.nav.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http) {

    console.log("Business Nav");

    $scope.isActive = function(route) {
        return route === $location.path();
    };

}]);

