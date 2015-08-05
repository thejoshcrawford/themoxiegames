(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function HomeController($q, dataservice, logger) {
        var vm = this;
        vm.news = {
            title: 'The Moxie Games',
            description: "The Moxie Games is a Women's only CrossFit competition."
        };
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Home';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];

           // // $('.banner-image').backstretch('../images/banner2.jpg');

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

            //Scroll Spy
            //-----------------------------------------------
            if ($('.scrollspy').length > 0) {
                $('body').addClass('scroll-spy');
                $('body').scrollspy({
                    target: '.scrollspy',
                    offset: 152
                });
            }

            //Smooth Scroll
            //-----------------------------------------------
            if ($('.smooth-scroll').length > 0) {
                $('.smooth-scroll a[href*=#]:not([href=#]), a[href*=#]:not([href=#]).smooth-scroll').click(function () {
                    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {
                            $('html,body').animate({
                                scrollTop: target.offset().top - 151
                            }, 1000);
                            return false;
                        }
                    }
                });
            }

            // Animations
            //-----------------------------------------------
            if (($('[data-animation-effect]').length > 0) && !Modernizr.touch) {
                $('[data-animation-effect]').each(function () {
                    var $this = $(this),
                        animationEffect = $this.attr('data-animation-effect');
                    // if (Modernizr.mq('only all and (min-width: 768px)') && Modernizr.csstransitions) {
                    //     $this.appear(function () {
                    //         setTimeout(function () {
                    //             $this.addClass('animated object-visible ' + animationEffect);
                    //         }, 400);
                    //     }, { accX: 0, accY: -130 });
                    // } else {
                        $this.addClass('object-visible');
                    // }
                });
            };

            return $q.all(promises).then(function () {
                logger.info('Activated Home View');
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
