app.controller('business.list.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$httpParamSerializer',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $httpParamSerializer, $http, Popeye) {

    console.log("Business List");

    var base = angular.element("#business");

    $scope.business = {

        list : [
            {
                "place" : "Empresa",
                "type" : "Categoria",
                "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
                "approval" : "70%",
                "url" : "/place/nome-da-empresa"
            },
            {
                "place" : "Empresa",
                "type" : "Categoria",
                "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
                "approval" : "70%",
                "url" : "/place/nome-da-empresa"
            },
            {
                "place" : "Empresa",
                "type" : "Categoria",
                "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
                "approval" : "70%",
                "url" : "/place/nome-da-empresa"
            }
        ],

        submit : function(n) {

            $location.path('/business/dashboard/' + n);
        }
    };

}]);

