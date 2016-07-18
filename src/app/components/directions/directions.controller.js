app.controller('directions.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Directions");

    var base = angular.element(".directions");

    $scope.share = {

        close : function() {
            Popeye.closeCurrentModal();
        }
    };

}]);
