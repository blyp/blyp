app.directive(
    "accountNav",
    function() {

        return({
            controller: "account.nav.controller",
            restrict: "AE",
            replace: true,
            templateUrl: "views/account/partials/_nav.html"
        });

    }
);
