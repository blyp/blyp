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
        identity : {
            cpf : '111.333.777-00'
        },
        birthdate : {
            day : '19',
            month : '9',
            year : '1987'
        },
        mobile : {
            number : '(43) 9170-1772',
            brand : 'Apple iPhone'
        },
        postal : '86812-055',
        country : 'BR',
        notification : {
            email : true,
            mobile : false
        }
    };

}]);

