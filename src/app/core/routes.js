angular.module('core.routes', ['ngRoute']).config([
    '$routeProvider',
    '$compileProvider',
    '$locationProvider', function($routeProvider, $compileProvider, $locationProvider) {

    $locationProvider.html5Mode(true);

    $routeProvider

        .when('/', {
            templateUrl : 'views/home/home.html',
            controller  : 'home.controller'
        })

        .when('/search', {
            templateUrl : 'views/search/search.html',
            controller  : 'search.controller'
        })

        .when('/articles', {
            templateUrl : 'views/article/list.html',
            controller  : 'article.list.controller'
        })

        .when('/articles/:slug', {
            templateUrl : 'views/article/article.html',
            controller  : 'article.controller'
        })

        .when('/articles/tags/:slug', {
            templateUrl : 'views/article/tags.html',
            controller  : 'article.tags.controller'
        })

        .otherwise({ redirectTo: '/' });

}]);
