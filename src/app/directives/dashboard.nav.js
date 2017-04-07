app.directive(
    "dashboardNav",
    function() {

        return({
            controller: "business.nav.controller",
            restrict: "AE",
            replace: true,
            templateUrl: "views/business/partials/_nav.html"
        });

    }
);
