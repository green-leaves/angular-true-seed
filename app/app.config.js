(function() {
    angular.module('app').config(['$urlRouterProvider', '$httpProvider',
        function ($urlRouterProvider, $httpProvider) {

            //Default redirect to home
            $urlRouterProvider.otherwise("/");

            $httpProvider.defaults.headers.get = {'Content-Type': 'application/json'};
            $httpProvider.defaults.headers.common = {'Content-Type': 'application/json'};
            $httpProvider.defaults.headers.post = {'Content-Type': 'application/json'};
            $httpProvider.defaults.headers.put = {'Content-Type': 'application/json'};
            $httpProvider.defaults.headers.patch = {'Content-Type': 'application/json'};

            //Append token for each request
            $httpProvider.interceptors.push('httpInterceptor');
        }]);
})();

