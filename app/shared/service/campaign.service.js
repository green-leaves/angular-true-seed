(function() {
    'use strict';

    angular
        .module('app')
        .factory('campaignService', campaignService);

    function campaignService($log, $http, appConfig) {
        $log.info("log from campaignService");

        var campaignService = {
            getAllCampaignPaging: getAllCampaignPaging,
            getCampaignDetail: getCampaignDetail
        };

        return campaignService;

        ////////////////////////////////

        function getAllCampaignPaging(opts) {
            return $http({
                url: appConfig.restURL + 'campaign',
                method: 'GET',
                params: opts
            });
        };
        
        function getCampaignDetail(opts) {
        	
        }

    };
})();
