app.controller('home.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    '$httpParamSerializer', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, $httpParamSerializer) {

    console.log("Home");

    var base = angular.element("#home");

    $scope.articles = [
        {
            "author" : {
            "name" : "Nome do Autor",
            "image" : "http://images.hngn.com/data/images/full/136378/jaimie-alexander.jpg?w=350&h=350"
            },
            "title" : "Título do Artigo",
            "description" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "url" : "/articles/mussum-ipsum-cacilds-vidis-vitro-abertis"
        },
        {
            "author" : {
            "name" : "Nome do Autor",
            "image" : "http://images.hngn.com/data/images/full/136378/jaimie-alexander.jpg?w=350&h=350"
            },
            "title" : "Título do Artigo",
            "description" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "url" : "/articles/mussum-ipsum-cacilds-vidis-vitro-abertis"
        },
        {
            "author" : {
            "name" : "Nome do Autor",
            "image" : "http://images.hngn.com/data/images/full/136378/jaimie-alexander.jpg?w=350&h=350"
            },
            "title" : "Título do Artigo",
            "description" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "url" : "/articles/mussum-ipsum-cacilds-vidis-vitro-abertis"
        }
    ];

    $scope.viewned = [
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
    ];

    $scope.ad = {

        init : function() {

            $('.poster').masonry({
                itemSelector : '.poster-item',
                percentPosition : true
            });
        }
    };

    $scope.search = {

        fields : {
            q : null,
            place : null
        },

        init : function() {

            if (this.fields.q !== null)
                this.results(this.fields.q.length);
        },

        results : function(i) {

            var $elem = base.find(".results");

            if (i > 3 && $window.innerWidth > 992) {
                $elem.show();
                return false;
            }

            $elem.hide();
        },

        submit : function() {
            $location.path('/search').search($httpParamSerializer(this.fields));
        }
    };

    $scope.place = {

        go : function(url) {
            $location.path(url);
        }
    };

    $scope.carousel = {

        articles : function() {

            $("#owl-articles").owlCarousel({
                nav : false,
                loop : true,
                responsive:{
                    0 : {
                        items : 1
                    },
                    768 : {
                        items : 2
                    },
                    1280 : {
                        items : 3,
                        dots : false
                    }
                }
            });
        },

        viewned : function() {

            $("#owl-viewned").owlCarousel({
                nav : false,
                loop : true,
                responsive:{
                    0 : {
                        items : 1
                    },
                    768 : {
                        items : 3
                    },
                    1280 : {
                        items : 5,
                        dots : false
                    }
                }
            });
        }
    };

    setTimeout(function(){
        $scope.ad.init();
        $scope.carousel.viewned();
        $scope.carousel.articles();
    }, 500);

}]);
