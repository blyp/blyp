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

        .when('/place/:slug', {
            templateUrl : 'views/place/place.html',
            controller  : 'place.controller'
        })

        .when('/place/:slug/directions', {
            templateUrl : 'views/place/place.directions.html',
            controller  : 'place.controller'
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

        .when('/business/create', {
            templateUrl : 'views/business/create/new.html',
            controller  : 'business.create.controller'
        })

        .when('/business/create/finish', {
            templateUrl : 'views/business/create/finish.html',
            controller  : 'business.create.controller'
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
