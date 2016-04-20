app.controller('account.comments.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Account Comments");

    var base = angular.element("#account");

    $scope.comments = [
        {
            "text" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "date" : "16/01/2016",
            "article" : {
                "title" : "Mussum ipsum cacilds, vidis litro abertis.",
                "url" : "/articles/mussum-ipsum-cacilds-vidis-vitro-abertis",
                "image" : "https://cdn-images-1.medium.com/fit/t/800/240/1*7WrDvHvEaMnsSo7s0-W9pw.jpeg",
            }
        },
        {
            "text" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "date" : "16/01/2016",
            "article" : {
                "title" : "Mussum ipsum cacilds, vidis litro abertis.",
                "url" : "/articles/mussum-ipsum-cacilds-vidis-vitro-abertis",
                "image" : "https://cdn-images-1.medium.com/fit/t/800/240/1*7WrDvHvEaMnsSo7s0-W9pw.jpeg",
            }
        },
        {
            "text" : "Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis.",
            "date" : "16/01/2016",
            "article" : {
                "title" : "Mussum ipsum cacilds, vidis litro abertis.",
                "url" : "/articles/mussum-ipsum-cacilds-vidis-vitro-abertis",
                "image" : "https://cdn-images-1.medium.com/fit/t/800/240/1*7WrDvHvEaMnsSo7s0-W9pw.jpeg",
            }
        }
    ];
}]);

