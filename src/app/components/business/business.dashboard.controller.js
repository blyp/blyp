app.controller('business.dashboard.controller', [
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

    console.log("Business Dashboard");

    var base = angular.element("#business");

    $scope.alias = $route.current.$$route.alias;

    $scope.active = {
        icon : null,
        title : null
    };

    $scope.init = {

        pushActive : function(alias) {

            switch (alias) {

                case 'profile' :
                    $scope.active.icon = 'edit';
                    $scope.active.title = 'Editar Perfil';
                    break;

                case 'password' :
                    $scope.active.icon = 'vpn_key';
                    $scope.active.title = 'Mudar Senha';
                    break;

                case 'coupons' :
                    $scope.active.icon = 'local_offer';
                    $scope.active.title = 'Cupons';
                    break;

                case 'bookmarks' :
                    $scope.active.icon = 'bookmark_border';
                    $scope.active.title = 'Recomendações';
                    break;

                case 'comments' :
                    $scope.active.icon = 'comment';
                    $scope.active.title = 'Comentários';
                    break;

                case 'favorites' :
                    $scope.active.icon = 'favorite';
                    $scope.active.title = 'Favoritos';
                    break;

                default :
                    $scope.active.icon = 'account_circle';
                    $scope.active.title = 'Visão Geral';
                    break;
            }
        }
    };

    $scope.init.pushActive($scope.alias);

}]);

