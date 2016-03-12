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

    $scope.maps = {

        pullCenter : function() {
            return "Curtiba, PR";
        },

        source : function() {

            var $params = {
                'center' : this.pullCenter,
                'zoom' : GSTATIC.ZOOM,
                'size' : GSTATIC.SIZE,
                'maptype' : GSTATIC.TYPE,
                'key' : GSTATIC.KEY
            };

            return  GSTATIC.HOST + $.param($params);
        }
    };

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

