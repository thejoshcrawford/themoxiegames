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
            },
            {
            state: 'leaderboard-admin',
                config: {
                    url: '/lb-admin',
                    templateUrl: 'app/leaderboard/leaderboard-admin.html',
                    controller: 'LeaderboardAdminController',
                    controllerAs: 'vm'
                }
            }
        ];
    }
})();
