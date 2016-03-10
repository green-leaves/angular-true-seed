(function() {
    'use strict';

    angular
        .module('app')
        .factory('signupService', signupService);

    function signupService($log, $http) {
        $log.info("log from signupService");

        var campaignService = {
        };

        return signupService;


        /*function getAllCampaignPaging(opts, success, error) {
            return $http({
                url: appConfig.restURL + 'campaign',
                method: 'GET',
                params: opts
            })
                .then(getAllCampaignPagingSuccess)
                .catch(getAllCampaignPagingError);

            function getAllCampaignPagingSuccess(response) {
                success(response.data);
            };

            function getAllCampaignPagingError(response) {
                error(response);
            };

        };*/

    };
})();
