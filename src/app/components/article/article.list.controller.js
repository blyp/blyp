app.controller('article.list.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Article List");

    var base = angular.element("#article");

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
}]);

