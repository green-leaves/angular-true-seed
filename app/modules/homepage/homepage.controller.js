(function() {
    angular
        .module('app.homepage')
        .controller('HomepageController', HomepageController);

    function HomepageController($scope, $log) {
        $log.info('homepage controller');

        $scope.message = 'Hello, I am true seed';

        initData();

        /////////////////

        function initData() {

        }

    };
})();
