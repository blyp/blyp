app.controller('account.overview.controller', [
    '$scope',
    '$location',
    '$routeParams',
    '$route',
    '$timeout',
    '$filter',
    '$window',
    '$http',
    'Popeye', function($scope, $location, $routeParams, $route, $timeout, $filter, $window, $http, Popeye) {

    console.log("Account Overview");

    var base = angular.element("#account");

    $scope.profile = {
        name : 'Leonardo Moreira',
        email : 'eu@leonardomoreira.com.br',
        gender : 'M',
        birthdate : {
            day : 19,
            month : 9,
            year : 1987
        },
        postal : '86812-055'
    };

}]);

