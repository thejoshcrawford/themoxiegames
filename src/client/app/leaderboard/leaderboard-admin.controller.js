(function () {
    'use strict';

    angular
        .module('app.leaderboard')
        .controller('LeaderboardAdminController', LeaderboardAdminController);

    LeaderboardAdminController.$inject = ['$q', '$scope', '$firebaseArray', '$firebaseAuth', 'logger'];
    /* @ngInject */
    function LeaderboardAdminController($q, $scope, $firebaseArray, $firebaseAuth, logger) {
        var vm = this;
        
        var ref = new Firebase("https://boiling-fire-216.firebaseio.com/moxie-games-2016/divisions");
        vm.divisions = $firebaseArray(ref);
        
        vm.change = function(divisionIndex) {
            vm.divisions.$save(Number(divisionIndex))
                .then(function(blah) {
                    var test = blah;
                });
        };
        
        var auth = $firebaseAuth(ref);
        // login with Facebook
        auth.$authWithOAuthPopup("google").then(function(authData) {
            console.log("Logged in as:", authData.uid);
        }).catch(function(error) {
            console.log("Authentication failed:", error);
        });
    }
})();
