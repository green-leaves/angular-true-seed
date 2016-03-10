(function() {
    angular.module('app').constant(
        "appConfig", {
            restURL: /*@restURL*/"http://localhost:8080/api/",
            token: "auth-token"
        }
    )
})();

