(function() {
    'use strict';

    angular
        .module('app')
        .factory('authenticateService', authenticateService);

    function authenticateService($log, $http, appConfig) {
        $log.info("log from authenticateService");

        var authenticateService = {
            authenticate: authenticate,
            retrieveUserInfo: retrieveUserInfo
        };

        return authenticateService;

        ////////////////////////////////

        function authenticate(opts) {
            return $http({
                url: appConfig.restURL + 'authenticate',
                method: 'POST',
                data: opts.authentication
            });
        };

        function retrieveUserInfo() {
            return $http({
                url: appConfig.restURL + 'retrieveUserInfo',
                method: 'GET',
            });
        };

    };
})();
