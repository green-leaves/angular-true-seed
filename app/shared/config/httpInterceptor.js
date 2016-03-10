(function () {
    angular
        .module('app')
        .factory('httpInterceptor', httpInterceptor);

    function httpInterceptor($cookies, appConfig) {
        return {
            request: function (requestConfig) {
                requestConfig.headers[appConfig.token] = $cookies.get(appConfig.token);

                return requestConfig;
            }
        }
    };
})();