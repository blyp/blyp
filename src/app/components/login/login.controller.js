app.controller('login.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Login");

    var base = angular.element(".login");

    $scope.login = {

        close : function() {
            Popeye.closeCurrentModal();
        }
    };

}]);

