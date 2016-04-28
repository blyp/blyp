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
            controller  : 'search.controller',
            resolve: {
                check : function($location, _search) {

                    if ( ! _search.data($location.search()))
                        $location.path('search/404').search({});
                }
            }
        })

        .when('/search/404', {
            templateUrl : 'views/search/search.404.html',
            controller  : 'search.controller',
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
            alias : 'overview',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/account/profile', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'profile',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/account/change-password', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'password',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/account/coupons', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'coupons',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/account/bookmarks', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'bookmarks',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/account/comments', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'comments',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/account/favorites', {
            templateUrl : 'views/account/account.html',
            controller  : 'account.controller',
            alias : 'favorites',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .otherwise({ redirectTo: '/' });

}]);
