app.controller('header.controller', [
    '$scope',
    '$rootScope',
    '$location',
    '$window',
    '$routeParams',
    '$route',
    '$filter',
    'Popeye', function($scope, $rootScope, $location, $window, $routeParams, $route, $filter, Popeye) {

    console.log("Header");

    $scope.login = {

        open : function() {
            this.modal();
        },

        modal : function() {
            Popeye.openModal({
                templateUrl: "views/login/login.html",
                controller: "login.controller",
                modalClass: "login-modal"
            });
        }
    };
}]);
