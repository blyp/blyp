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
            controller  : 'business.create.controller',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/create/finish', {
            templateUrl : 'views/business/create/finish.html',
            controller  : 'business.create.controller',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard', {
            templateUrl : 'views/business/list.html',
            controller  : 'business.list.controller',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'overview',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/profile', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'profile',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/about', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'about',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/products', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'products',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/coupons', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'coupons',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/payments', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'payments',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/opening-hours', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'opening-hours',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/delivery', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'delivery',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/comments', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'comments',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/photos', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'photos',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/videos', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'videos',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
        })

        .when('/business/dashboard/:slug/files', {
            templateUrl : 'views/business/dashboard.html',
            controller  : 'business.dashboard.controller',
            alias : 'files',
            resolve : {
                factory : function (auth, $location) {
                    if ( ! auth.check())
                        auth.open($location.path());
                }
            }
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
