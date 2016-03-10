(function() {
    angular
        .module('app.signup')
        .run(appRun);

    appRun.$inject = ['routerHelper'];

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'signup',
                config: {
                    url: '/signup',
                    templateUrl: 'modules/signup/signup.html',
                    controller: 'SignupController'
                }
            }
        ];
    };
})();