(function() {
    angular
        .module('app.signup')
        .controller('SignupController', SignupController);

    function SignupController($scope, $log, signupService) {
        $log.info('Sign up controller');

        /*$scope.campaignList = {};

        campaignService.getAllCampaignPaging({
            pageIndex: 0,
            pageSize: 10
        }, getCampaignSuccess);

        function getCampaignSuccess(data) {
            $scope.campaignList = data.campaignDTOList;
        };*/
    };
})();
