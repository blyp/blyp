var app = angular.module('blyp', [
    'core.routes',
    'ui.bootstrap',
    'pathgather.popeye',
    'ngAnimate'
]);

var socket = {};

/*jshint esnext: true */
const API = {
    HOST    : "http://api.blyp.com.br/",
    KEY     : "348caba53c1234487714035965ad49fb",
    VERSION : "v1",
    FORMAT  : "json"
};

/*jshint esnext: true */
const IO = {
    HOST : "http://io.blyp.com.br/"
};

/*jshint esnext: true */
const GSTATIC = {
    HOST : "https://maps.googleapis.com/maps/api/staticmap?",
    KEY : "AIzaSyCM0KLxQhBdC92YGTY0E8wp3GlpyXCtpSc",
    ZOOM : "14",
    SIZE : "360x320",
    TYPE : "roadmap"
};

(function() {

    //fetchData().then(bootstrapApplication);

    fetchData();

    function fetchData() {
        var initInjector = angular.injector(['ng']);
        var $http = initInjector.get("$http");

        //var session = Cookies.get("blyp.com.br");
        //
        //var req = {
        //    url : API.HOST  + "auth/session/" + API.FORMAT,
        //    method : "GET",
        //    params : {
        //        api_key : API.KEY,
        //        id : (session) ? session : "null"
        //    }
        //};
        //
        //return $http(req).then(function(response){
        //    if ( ! jQuery.isEmptyObject(response.data.session))
        //        window.app.Session = response.data;
        //});

        return bootstrapApplication();
    }

    function bootstrapApplication() {
        angular.element(document).ready(function() {
            angular.bootstrap(document, ["blyp"]);
        });
    }

}());

app.config([
    '$httpProvider',
    function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
    }
]);

app.run([
    '$rootScope',
    '$location',
    function ($rootScope, $location) {

        $rootScope.path = $location.path();

        //$rootScope.path = false;

        $rootScope.$on('$routeChangeStart', function () {
            $rootScope.path = $location.path();
        });
    }
]);

window.app.Session = {};
