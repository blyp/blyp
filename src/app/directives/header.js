app.directive(
    "headerView",
    function() {

        return({
            controller: "header.controller",
            restrict: "AE",
            replace: true,
            templateUrl: "views/common/header.html"
        });

    }
);
