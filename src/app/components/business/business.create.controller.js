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
    };

    $scope.create = {

        setBusiness : function(n) {

            var fields = {
                "type": n
            };

            $location.path('/business/create/finish').search($httpParamSerializer(fields));
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
}]);

