app.directive(
    "footerView",
    function() {

        return({
            controller: "footer.controller",
            restrict: "AE",
            replace: true,
            templateUrl: "views/common/footer.html"
        });

    }
);
