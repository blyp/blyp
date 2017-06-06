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

    $scope.comments = {
        
        data : [
            {
                id : "1",
                text : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
                date : "16/01/2016",
                report : "0",
                points : "+1",
                rate : "positive",
                author : {
                    name : "Leonardo Moreira",
                    image : "https://graph.facebook.com/1636057229/picture?width=64&height=64"
                }
            },
            {
                id : "2",
                text : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
                date : "16/01/2016",
                report : "0",
                points : "+5",
                rate : "negative",
                author : {
                    name : "Leonardo Moreira",
                    image : "https://graph.facebook.com/1636057229/picture?width=64&height=64"
                }
            },
            {
                id : "3",
                text : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
                date : "16/01/2016",
                report : "1",
                points : "-2",
                rate : "positive",
                author : {
                    name : "Leonardo Moreira",
                    image : "https://graph.facebook.com/1636057229/picture?width=64&height=64"
                }
            }
        ],
        
        send : function(data) {
            
            this.close(data);
        },
        
        open : function(data) {

            $(".item[data-id='" + data + "'] form").show();
        },
        
        close : function(data) {
            
            $(".item[data-id='" + data + "'] form").hide();
        }
    };
    
    $scope.social = {
        
        data : {
            icon : null,
            title : null,
            field : null,
            url : null
        },
        
        open : function(item) {
            
            if (item === 'facebook') {
                
                this.data = {
                    icon : 'circlefacebook',
                    title : 'Facebook',
                    field : 'facebook',
                    url : 'http://www.facebook.com/blypoficial'
                };
            }

            if (item === 'twitter') {
                
                this.data = {
                    icon : 'circletwitterbird',
                    title : 'Twitter',
                    field : 'twitter',
                    url : null
                };
            }
            
            if (item === 'plus') {
                
                this.data = {
                    icon : 'circlegoogleplus',
                    title : 'Google Plus',
                    field : 'googleplus',
                    url : null
                };
            }
            
            if (item === 'youtube') {
                
                this.data = {
                    icon : 'circleyoutube',
                    title : 'YouTube',
                    field : 'youtube',
                    url : null
                };
            }
            
            this.modal();
        },

        modal : function() {
            
            Popeye.openModal({
                templateUrl: "views/business/partials/_about.social.html",
                controller: "business.dashboard.social.controller",
                modalClass: "about-modal",
                resolve: {
                    data : function () {
                      return $scope.social.data;
                    }
                  }
            });
        }
    };

    $scope.openinghours = {
      
        select : function(data) {

            if ($("[name='openinghours["+data+"]']:checkbox:checked").length > 0) {
                this.disabled(data);
            } else {
                this.enabled((data));
            }
        },
        
        enabled : function(data) {
            
            $(".openinghours-content ." + data + " select").removeAttr('disabled');
            $(".openinghours-content ." + data + " .full-time  input").removeAttr('disabled');
            $(".openinghours-content ." + data + " .full-time .control-indicator").removeClass('disabled');
        },
        
        disabled : function(data) {
            
            $(".openinghours-content ." + data + " select").attr('disabled', 'disabled');
            $(".openinghours-content ." + data + " .full-time  input").attr('disabled', 'disabled');
            $(".openinghours-content ." + data + " .full-time .control-indicator").addClass('disabled');
        }
    };
    $scope.init.pushActive($scope.alias);

}]);
