(function() {
    'use strict';

    angular
        .module('app.leaderboard')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'leaderboard',
                config: {
                    url: '/lb',
                    templateUrl: 'app/leaderboard/leaderboard.html',
                    controller: 'LeaderboardController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
