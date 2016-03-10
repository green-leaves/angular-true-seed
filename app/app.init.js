angular.module('app').run(init);

function init ($rootScope, appConfig, authenticateService, $cookies) {
    $rootScope.$on("$stateChangeStart", function (event, toState, toParams, fromState, fromParams) {
        console.log('$stateChangeStart');
    });
};