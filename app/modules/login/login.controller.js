(function() {
    angular
        .module('app.login')
        .controller('LoginController', LoginController);

    function LoginController($scope, appConfig, $log, authenticateService, $cookies, $state) {
        $log.info('Login controller');

        //variable
        $scope.authentication = {};

        //function
        $scope.login = login;

        ///////////////////////////////

        function login() {
            $scope.$broadcast('show-errors-check-validity');

            if ($scope.loginForm.$invalid) {
                return;
            }

            var promise = authenticateService.authenticate({
                authentication: $scope.authentication
            });

            promise.then(loginSuccess).catch(loginError);

            function loginSuccess(response) {
                $cookies.put(appConfig.token, response.data.token);
                $scope.badCredential = false;
                $state.go('home');
            };

            function loginError() {
                $scope.badCredential = true;
            };

        };

    };
})();
