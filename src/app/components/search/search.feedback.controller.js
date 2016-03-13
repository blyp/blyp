app.controller('search.feedback.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Search Feedback");

    var base = angular.element(".search-feedback");

    $scope.feedback = {

        yup : function(child) {

            var $elem = base.find("li");
            var $target = base.find("li:nth-child("+child+")");

            $elem.css({
                'opacity' : '0',
            });

            $target.css({
                'opacity' : '1',
            });
        },

        send : function(value) {

            this.yup(value);
            this.close();
        },

        close : function() {
            Popeye.closeCurrentModal();
        }
    };

}]);

