(function() {
    angular
        .module('app.login')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'login',
                config: {
                    url: '/login',
                    templateUrl: 'modules/login/login.html',
                    controller: 'LoginController'
                }
            }
        ];
    };
})();