(function() {
    angular.module('app')
        .controller('AppController', AppController);

    function AppController($scope, $rootScope, $window, authenticateService) {

        initData();

        //////////////////

        function initData() {
            authenticateService.retrieveUserInfo().then(function (response) {
                $scope.userInfo = response.data;
                console.log($scope.userInfo);
            });
        };

    };

})();
