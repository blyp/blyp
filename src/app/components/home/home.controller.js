app.controller('home.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http) {

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
            "url" : "/"
        },
        {
            "author" : {
            "name" : "Nome do Autor",
            "image" : "http://images.hngn.com/data/images/full/136378/jaimie-alexander.jpg?w=350&h=350"
        },
            "title" : "Título do Artigo",
            "description" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "url" : "/"
        },
        {
            "author" : {
            "name" : "Nome do Autor",
            "image" : "http://images.hngn.com/data/images/full/136378/jaimie-alexander.jpg?w=350&h=350"
        },
            "title" : "Título do Artigo",
            "description" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "url" : "/"
        }
    ];

    $scope.viewned = [
        {
            "place" : "Empresa",
            "type" : "Categoria",
            "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
            "approval" : "70%",
            "url" : "/"
        },
        {
            "place" : "Empresa",
            "type" : "Categoria",
            "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
            "approval" : "70%",
            "url" : "/"
        },
        {
            "place" : "Empresa",
            "type" : "Categoria",
            "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
            "approval" : "70%",
            "url" : "/"
        },
        {
            "place" : "Empresa",
            "type" : "Categoria",
            "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
            "approval" : "70%",
            "url" : "/"
        },
        {
            "place" : "Empresa",
            "type" : "Categoria",
            "image" : "https://static.festisite.com/static/partylogo/img/logos/burger-king.png",
            "approval" : "70%",
            "url" : "/"
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
            "type" : null,
            "place" : null
        },

        init : function() {

            if (this.fields.type !== null)
                this.results(this.fields.type.length);
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
            $location.path('/search');
        }
    };

    $scope.carousel = {

        articles : function() {

            $("#owl-articles").owlCarousel({
                items : 3,
                itemsDesktopSmall : [1280,2],
                itemsTablet : [768,1]
            });
        },

        viewned : function() {

            $("#owl-viewned").owlCarousel({
                items : 5,
                itemsDesktopSmall : [992,2],
                itemsTablet : [768,1]
            });
        }
    };

    setTimeout(function(){
        $scope.ad.init();
        $scope.carousel.viewned();
        $scope.carousel.articles();
    }, 500);

}]);
