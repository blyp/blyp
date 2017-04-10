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

    $scope.business = {

        field : {
            name : 'Blyp Tecnologia da Informação LTDA',
            website : 'www.blyp.com.br',
            phone : {
                number : '41 0000-0000'
            },
            address : 'Rua dos Ricos, 1000 ',
            city : 'Curitiba',
            state : 'PR',
            postal : '00000000',
            country : 'BR',
            identity : {
                taxid : ''
            }
        }

    };

    $scope.init = {

        pushActive : function(alias) {

            switch (alias) {

                case 'profile' :
                    $scope.active.icon = 'edit';
                    $scope.active.title = 'Editar Perfil';
                    break;

                case 'about' :
                    $scope.active.icon = 'info';
                    $scope.active.title = 'Sobre';
                    break;

                case 'products' :
                    $scope.active.icon = 'shopping_cart';
                    $scope.active.title = 'Produtos & Serviços';
                    break;

                case 'coupons' :
                    $scope.active.icon = 'local_offer';
                    $scope.active.title = 'Coupons de Desconto';
                    break;

                case 'comments' :
                    $scope.active.icon = 'chat';
                    $scope.active.title = 'Comentários';
                    break;

                case 'opening-hours' :
                    $scope.active.icon = 'alarm';
                    $scope.active.title = 'Horários de Funcionamento';
                    break;

                case 'payments' :
                    $scope.active.icon = 'monetization_on';
                    $scope.active.title = 'Formas de Pagamento';
                    break;

                case 'delivery' :
                    $scope.active.icon = 'motorcycle';
                    $scope.active.title = 'Entrega em Domicílio';
                    break;

                case 'photos' :
                    $scope.active.icon = 'panorama';
                    $scope.active.title = 'Fotos';
                    break;

                case 'videos' :
                    $scope.active.icon = 'videocam';
                    $scope.active.title = 'Vídeos';
                    break;

                default :
                    $scope.active.icon = 'business';
                    $scope.active.title = 'Visão Geral';
                    break;
            }
        }
    };

    $scope.comments = [
        {
            "text" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "date" : "16/01/2016",
            "author" : {
                "name" : "Leonardo Moreira",
                "image" : "https://graph.facebook.com/1636057229/picture?width=64&height=64",
            }
        },
        {
            "text" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "date" : "16/01/2016",
            "author" : {
                "name" : "Leonardo Moreira",
                "image" : "https://graph.facebook.com/1636057229/picture?width=64&height=64",
            }
        },
        {
            "text" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "date" : "16/01/2016",
            "author" : {
                "name" : "Leonardo Moreira",
                "image" : "https://graph.facebook.com/1636057229/picture?width=64&height=64",
            }
        }
    ];

    $scope.init.pushActive($scope.alias);

}]);

