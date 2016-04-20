app.controller('account.favorites.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Account Favorites");

    var base = angular.element("#account");

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

