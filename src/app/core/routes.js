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

        .when('/account', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'overview'
        })

        .when('/account/profile', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'profile'
        })

        .when('/account/change-password', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'password'
        })

        .when('/account/coupons', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'coupons'
        })

        .when('/account/bookmarks', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'bookmarks'
        })

        .when('/account/comments', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'comments'
        })

        .when('/account/favorites', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'favorites'
        })

        .when('/contact', {
            templateUrl : 'views/contact/contact.html',
            controller  : 'contact.controller'
        })

        .when('/terms', {
            templateUrl : 'views/terms/terms.html',
            controller  : 'terms.controller'
        })

        .otherwise({ redirectTo: '/' });

}]);
