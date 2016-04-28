app.controller('search.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'geo',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, geo, Popeye) {

    console.log("Search");

    var base = angular.element("#search");

    geo.get();

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

    $scope.feedback = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/search/search.feedback.html",
                controller: "search.feedback.controller",
                modalClass: "feedback-modal"
            });
        }
    };

    $scope.share = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/share/share.html",
                controller: "share.controller",
                modalClass: "share-modal"
            });
        }
    };

    $scope.directions = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/directions/directions.html",
                controller: "directions.controller",
                modalClass: "directions-modal"
            });
        }
    };

}]);

