app.controller('business.dashboard.social.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', 'data', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye, data) {

    var base = angular.element(".about-social");

    $scope.data = data;
    
    $scope.social = {

        save : function () {
            
            console.log('save');
            this.close();
        },
        
        remove : function () {
            
            console.log('remove');
            this.close();
        },

        close : function() {
            Popeye.closeCurrentModal();
        }
    };

}]);

