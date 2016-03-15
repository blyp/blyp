app.directive(
    "headerView",
    function() {

        var isLogged = function() {

            if (_.isEmpty(window.app.Session)) {
                console.log("1");
                return "views/header/header.logged.html";
            }

            return "views/header/header.logged.html";
        };

        return({
            controller: "header.controller",
            restrict: "AE",
            replace: true,
            templateUrl: isLogged()
        });

    }
);
