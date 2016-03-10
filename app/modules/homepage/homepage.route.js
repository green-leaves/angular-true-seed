(function() {
    angular
        .module('app.homepage')
        .run(appRun);

    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    };

    function getStates() {
        return [
            {
                state: 'home',
                config: {
                    url: '/',
                    templateUrl: 'modules/homepage/homepage.html',
                    controller: 'HomepageController'
                }
            }
        ];
    };
})();