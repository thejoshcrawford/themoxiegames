(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', '$scope', 'logger'];
    /* @ngInject */
    function HomeController($q, $scope, logger) {
        var vm = this;
        vm.division = "";
        vm.email = "";

        activate();
        
        $scope.animateElementIn = function($el) {
            $el.removeClass('object-non-visible');
            $el.addClass('animated object-visible fadeIn'); // this example leverages animate.css classes 
        };
        
        $scope.animateElementOut = function($el) {};

        function activate() {

            // Fixed header
            //-----------------------------------------------
            $(window).scroll(function () {
                if (($('.header.fixed').length > 0)) {
                    if (($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                        $('body').addClass('fixed-header-on');
                    } else {
                        $('body').removeClass('fixed-header-on');
                    }
                };
            });

            $(window).load(function () {
                if (($('.header.fixed').length > 0)) {
                    if (($(this).scrollTop() > 0) && ($(window).width() > 767)) {
                        $('body').addClass('fixed-header-on');
                    } else {
                        $('body').removeClass('fixed-header-on');
                    }
                };
            });
        }
    }
})();
