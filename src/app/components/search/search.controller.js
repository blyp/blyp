app.controller('search.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http) {

    console.log("Search");

    var base = angular.element("#search");

    $scope.filters = {

        toggle : function() {

            var $elem = base.find(".filters");

            if ($elem.css("display") === "none") {
                $elem.css("display", "block");
            } else {
                $elem.css("display", "none");
            }
        }
    };

}]);
