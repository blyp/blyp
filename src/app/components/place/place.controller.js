app.controller('place.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Place");

    var base = angular.element("#place");

    $scope.place = {
        name : "Nome da Empresa",
        slug : "nome-da-empresa",
        logo : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
        banner : "http://economiaes.com/wp-content/uploads/2012/12/02g.jpg"
    };

    $scope.pictures = {

        oficial : [
            {
                picture : "http://upload.wikimedia.org/wikipedia/commons/6/62/Burger_King,_Saugus.jpg"
            },
            {
                picture : "http://economiaes.com/wp-content/uploads/2012/12/02g.jpg"
            },
            {
                picture : "http://i.huffpost.com/gen/2846156/images/o-BURGER-KING-facebook.jpg"
            }
        ],

        clients : [
            {
                picture : "http://upload.wikimedia.org/wikipedia/commons/6/62/Burger_King,_Saugus.jpg"
            },
            {
                picture : "http://economiaes.com/wp-content/uploads/2012/12/02g.jpg"
            },
            {
                picture : "http://i.huffpost.com/gen/2846156/images/o-BURGER-KING-facebook.jpg"
            }
        ]

    };


    $scope.ad = {
        picture : "http://image.shutterstock.com/z/stock-vector-italian-restaurant-banner-131294468.jpg",
        url : "/place/nome-da-empresa"
    };

    $scope.maps = {

        pullLocation : function() {

            var location = geo.get();

            if (location !== false)
                return JSON.parse(location);

            return false;
        },

        pullCenter : function() {
            return "Curtiba, PR";
        },

        source : function() {

            var $params = {
                'center' : this.pullCenter,
                'zoom' : GSTATIC.ZOOM,
                'size' : GSTATIC.SIZE,
                'maptype' : GSTATIC.TYPE,
                'key' : GSTATIC.KEY
            };

            return  GSTATIC.HOST + $.param($params);
        }
    };

    $scope.carousel = {

        picturesOficial : function() {

            $("#owl-pictures-oficial").owlCarousel({
                nav : true,
                dots : false,
                loop : true,
                responsive:{
                    0 : {
                        items : 1
                    }
                }
            });
        },

        picturesClients : function() {

            $("#owl-pictures-clients").owlCarousel({
                nav : true,
                dots : false,
                loop : true,
                responsive:{
                    0 : {
                        items : 1
                    }
                }
            });
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

    setTimeout(function(){
        $scope.carousel.picturesOficial();
        $scope.carousel.picturesClients();
    }, 500);

}]);
