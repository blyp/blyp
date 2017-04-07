app.controller('business.create.controller', [
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

    console.log("Create new business");

    var base = angular.element("#business");

    $scope.business = {

        field : {
            name : '',
            website : '',
            phone : {
                number : ''
            },
            address : '',
            city : '',
            state : 'SP',
            postal : '',
            country : 'BR',
            identity : {
                taxid : ''
            },
            notification : {
                owner : false,
                terms : false
            }
        },

        submit : function() {

            console.log($scope.business.field);

            $location.path('/business/dashboard/1').search('type', null);
        }
    };

    $scope.create = {

        setBusiness : function(n) {

            var fields = {
                "type": n
            };

            $location.path('/business/create/finish').search($httpParamSerializer(fields));
        }
    };

    $scope.location = {

        go : function(url, n) {

            var fields = {
                "type": n
            };

            $location.path(url).search($httpParamSerializer(fields));
        }
    };

}]);

