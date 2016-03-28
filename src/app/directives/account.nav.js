app.directive(
    "accountNav",
    function() {

        return({
            controller: "account.controller",
            restrict: "AE",
            replace: true,
            templateUrl: "views/account/account.nav.html"
        });

    }
);
