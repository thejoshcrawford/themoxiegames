/**
 * the-moxie-games - The Moxie Games Project
 * @authors 
 * @version v0.0.0
 * @link 
 * @license 
 */
!function(){"use strict";angular.module("app",["app.core","app.widgets","app.layout","app.home"])}(),function(){"use strict";angular.module("blocks.exception",["blocks.logger"])}(),function(){"use strict";angular.module("blocks.logger",[])}(),function(){"use strict";angular.module("blocks.router",["ui.router","blocks.logger"])}(),function(){"use strict";angular.module("app.core",["ngAnimate","ngSanitize","blocks.exception","blocks.logger","blocks.router","ui.router","ngplus"])}(),function(){"use strict";angular.module("app.home",["app.core","app.widgets","backstretch","paypalButton","duScroll","angular-scroll-animate"])}(),function(){"use strict";angular.module("app.layout",["app.core"])}(),function(){"use strict";angular.module("app.widgets",[])}(),angular.module("backstretch",[]).directive("backstretch",["$window","$timeout",function(e,a){return{restrict:"A",scope:{images:"&backstretchImages",duration:"&backstretchDuration",fade:"&backstretchFade"},link:function(t,i,s){if(t.images=Array.isArray(t.images())?t.images():[t.images()],t.duration=t.duration()||5e3,t.fade=t.fade()||1,0===t.images.length)return!1;var l={wrapper:{left:0,top:0,overflow:"hidden",margin:0,padding:0,height:"100%",width:"100%",zIndex:-999998,position:"absolute"},image:{position:"absolute",opacity:0,margin:0,padding:0,border:"none",width:"auto",height:"auto",maxHeight:"none",maxWidth:"none",zIndex:-999999,transition:"all "+t.fade+"s"}};t.wrapper=angular.element('<div class="backstretch"></div>'),t.wrapper.css(l.wrapper),t.images.forEach(function(e,a,i){t.image=angular.element("<img>"),t.image[0].src=e,t.image.css(l.image),t.wrapper.append(t.image)}),i.append(t.wrapper),t.index=0,t.load=function(e){t.ratio=this.width/this.height,t.resize(),t.show(t.index++)},t.resize=function(e){var a,s={left:0,top:0,width:"auto",height:"auto"},l=i[0].offsetWidth,n=l,o=i[0].offsetHeight,r=n/t.ratio;r>=o?(a=(r-o)/2,s.top="-"+a+"px"):(r=o,n=r*t.ratio,a=(n-l)/2,s.left="-"+a+"px"),s.width=n+"px",s.height=r+"px",t.wrapper.css({width:l,height:o});for(var c=0;c<t.wrapper.children().length;c++){var d=angular.element(t.wrapper.children()[c]);d.css(s)}},t.show=function(e){var i=t.wrapper.children()[e];return t.image=angular.element(i),1===t.images.length?void t.image.css({opacity:1}):(e>=t.images.length-1&&(t.index=0),t.image.css({opacity:1}),a(function(){t.image.css({opacity:0})},t.duration),void a(function(){t.show(t.index++)},t.duration))},t.image.bind("load",t.load),angular.element(e).bind("resize",t.resize)}}}]),function(){"use strict";function e(){this.config={appErrorPrefix:void 0},this.configure=function(e){this.config.appErrorPrefix=e},this.$get=function(){return{config:this.config}}}function a(e){e.decorator("$exceptionHandler",t)}function t(e,a,t){return function(i,s){var l=a.config.appErrorPrefix||"",n={exception:i,cause:s};i.message=l+i.message,e(i,s),t.error(i.message,n)}}angular.module("blocks.exception").provider("exceptionHandler",e).config(a),a.$inject=["$provide"],t.$inject=["$delegate","exceptionHandler","logger"]}(),function(){"use strict";function e(e,a){function t(t){return function(i){var s,l;return i.data&&i.data.description&&(s="\n"+i.data.description,l=t+s),i.data.description=l,a.error(l),e.reject(i)}}var i={catcher:t};return i}angular.module("blocks.exception").factory("exception",e),e.$inject=["$q","logger"]}(),function(){"use strict";function e(e,a){function t(t,i,s){a.error(t,s),e.error("Error: "+t,i)}function i(t,i,s){a.info(t,s),e.info("Info: "+t,i)}function s(t,i,s){a.success(t,s),e.info("Success: "+t,i)}function l(t,i,s){a.warning(t,s),e.warn("Warning: "+t,i)}var n={showToasts:!0,error:t,info:i,success:s,warning:l,log:e.log};return n}angular.module("blocks.logger").factory("logger",e),e.$inject=["$log","toastr"]}(),angular.module("paypalButton",[]).directive("paypalButton",function(){return{restrict:"E",scope:{},compile:function(e,a){function t(a){e.replaceWith('<span style="background-color:red; color:black; padding:.5em;">'+n+": "+a+"</span>"),console.log(e.context)}var i=["en_US","es_ES","fr_FR","it_IT","de_DE"],s=["AUD","CAD","CZK","DKK","EUR","HKD","HUF","ILS","JPY","MXN","NOK","NZD","PHP","PLN","GBP","RUB","SGD","SEK","CHF","TWD","THB","USD"],l=["SM","LG"],n=this.name,o=a.action||"https://www.paypal.com/us/cgi-bin/webscr",r=a.business,c=a.languageCode||"en_US",d=a.currencyCode||"USD",u=a.itemName,p=parseFloat(a.amount),m=a.buttonSize||"SM",v=a.imgAlt||"Make payments with PayPal - it's fast, free and secure!";if(!r)return t("business not specified!");if(!u)return t("item name not specified!");if(!p)return t("amount not specified!");if(isNaN(p))return t("amount is not a number!");if(i.indexOf(c)<0)return t("unforeseen language code!");if(s.indexOf(d)<0)return t("unforeseen currency code!");if(l.indexOf(m)<0)return t("unforeseen button size!");var g="http://www.paypalobjects.com/"+c+"/i/btn/btn_buynow_"+m+".gif",f='<form name="_xclick" action="'+o+'" method="post"><input type="hidden" name="cmd" value="_xclick"><input type="hidden" name="business" value="'+r+'"><input type="hidden" name="currency_code" value="'+d+'"><input type="hidden" name="item_name" value="'+u+'"><input type="hidden" name="amount" value="'+p+'"><input type="image" src="'+g+'" border="0" name="submit" alt="'+v+'"></form>';e.append(f)}}}),function(){"use strict";function e(e,a,t){function i(e,i,l,n){function o(e,i){e.forEach(function(e){e.config.resolve=angular.extend(e.config.resolve||{},s.resolveAlways),a.state(e.state,e.config)}),i&&!m&&(m=!0,t.otherwise(i))}function r(){i.$on("$stateChangeError",function(a,t,i,s,l,o){if(!p){v.errors++,p=!0;var r=t&&(t.title||t.name||t.loadedTemplateUrl)||"unknown target",c="Error routing to "+r+". "+(o.data||"")+". <br/>"+(o.statusText||"")+": "+(o.status||"");n.warning(c,[t]),e.path("/")}})}function c(){r(),u()}function d(){return l.get()}function u(){i.$on("$stateChangeSuccess",function(e,a,t,l,n){v.changes++,p=!1;var o=s.docTitle+" "+(a.title||"");i.title=o})}var p=!1,m=!1,v={errors:0,changes:0},g={configureStates:o,getStates:d,stateCounts:v};return c(),g}var s={docTitle:void 0,resolveAlways:{}};e.html5Mode(!0),this.configure=function(e){angular.extend(s,e)},this.$get=i,i.$inject=["$location","$rootScope","$state","logger"]}angular.module("blocks.router").provider("routerHelper",e),e.$inject=["$locationProvider","$stateProvider","$urlRouterProvider"]}(),function(){"use strict";function e(e){e.options.timeOut=4e3,e.options.positionClass="toast-bottom-right"}function a(e,a,t){e.debugEnabled&&e.debugEnabled(!0),t.configure(i.appErrorPrefix),a.configure({docTitle:i.appTitle+": "})}var t=angular.module("app.core");t.config(e),e.$inject=["toastr"];var i={appErrorPrefix:"[Error] ",appTitle:"The Moxie Games"};t.value("config",i),t.config(a),a.$inject=["$logProvider","routerHelperProvider","exceptionHandlerProvider"]}(),function(){"use strict";angular.module("app.core").constant("toastr",toastr).constant("moment",moment)}(),function(){"use strict";function e(e){var t="/404";e.configureStates(a(),t)}function a(){return[{state:"404",config:{url:"/404",templateUrl:"app/core/404.html",title:"404"}}]}angular.module("app.core").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e,a,t,i){function s(){return a.when(72)}function l(){function a(e){return e.data}function i(e){return t.catcher("XHR Failed for getPeople")(e)}return e.get("/api/people").then(a)["catch"](i)}var n={getPeople:l,getMessageCount:s};return n}angular.module("app.core").factory("dataservice",e),e.$inject=["$http","$q","exception","logger"]}(),function(){"use strict";function e(e,a,t,i){function s(){$(window).scroll(function(){$(".header.fixed").length>0&&($(this).scrollTop()>0&&$(window).width()>767?$("body").addClass("fixed-header-on"):$("body").removeClass("fixed-header-on"))}),$(window).load(function(){$(".header.fixed").length>0&&($(this).scrollTop()>0&&$(window).width()>767?$("body").addClass("fixed-header-on"):$("body").removeClass("fixed-header-on"))})}var l=this;l.division="",l.email="",s(),a.animateElementIn=function(e){e.removeClass("object-non-visible"),e.addClass("animated object-visible fadeIn")},a.animateElementOut=function(e){}}angular.module("app.home").controller("HomeController",e),e.$inject=["$q","$scope","dataservice","logger"]}(),function(){"use strict";function e(e){e.configureStates(a())}function a(){return[{state:"home",config:{url:"/",templateUrl:"app/home/home.html",controller:"HomeController",controllerAs:"vm",title:"home",settings:{nav:1,content:'<i class="fa fa-home"></i> Home'}}}]}angular.module("app.home").run(e),e.$inject=["routerHelper"]}(),function(){"use strict";function e(e,a,t,i){function s(){}var l=this;l.navline={title:t.appTitle,text:"Created by Josh Crawford",link:"http://crawford.cc"},s()}angular.module("app.layout").controller("ShellController",e),e.$inject=["$rootScope","$timeout","config","logger"]}(),function(){"use strict";function e(){function e(){}var a={bindToController:!0,controller:e,controllerAs:"vm",restrict:"EA",scope:{navline:"="},templateUrl:"app/layout/top-nav.html"};return a}angular.module("app.layout").directive("topNav",e)}(),function(){"use strict";function e(e){function a(e,a,s){s.$observe("htImgPerson",function(e){e=t+(e||i),s.$set("src",e)})}var t=e.imageBasePath,i=e.unknownPersonImageSource,s={link:a,restrict:"A"};return s}angular.module("app.widgets").directive("htImgPerson",e),e.$inject=["config"]}(),function(){"use strict";function e(){var e={scope:{title:"@",subtitle:"@",rightText:"@",allowCollapse:"@"},templateUrl:"app/widgets/widget-header.html",restrict:"EA"};return e}angular.module("app.widgets").directive("htWidgetHeader",e)}(),angular.module("app.core").run(["$templateCache",function(e){e.put("app/home/home.html",'<div id=banner class=banner><div class=banner-image backstretch backstretch-images="\'../images/banner2.jpg\'" style="height: 100vh;"></div><div class=banner-caption><div class=container><div class=row><div class="col-md-8 col-md-offset-2 object-non-visible" when-visible=animateElementIn when-not-visible=animateElementOut><h1 class=text-center>We are <span>Moxie</span></h1><p class="lead text-center">Moxie means to be bold and beautiful, just like the women of the Northwest! This is a chance for ladies to come together, show off their fitness and celebrate the love for CrossFit we all share. A portion of every entry will go towards the UGM Crisis Shelter for Women and Children in Spokane, WA. To compete you will need to meet the following standards:</p><ul><li>Barbell Lifts: 65lbs for individuals and 55lbs for masters</li><li>Box Jumps: 20inch box</li><li>Kettle Bell Movements: 35lbs</li><li>Dumbbell Movements: 20lbs</li><li>Wall Balls: 14lbs for individuals and 10lbs masters, 10ft target</li></ul></div></div></div></div></div><div id=register class="section object-non-visible translucent-bg bg-image-1 blue" when-visible=animateElementIn when-not-visible=animateElementOut><div class=container><div class=row><div class=col-md-12><div class="registration row"><div class="col-sm-8 col-sm-offset-2 col-lg-6 col-lg-offset-3"><h1 class=page-header>Register</h1><form class="application-form form-group" name=applicationForm><div class="btn-group btn-group-justified"><a href=javascript:void(0) ng-click="vm.division = \'individual\'" ng-class="{ \'active\' : vm.division == \'individual\' }" class="btn btn-default">Individual Rx ($55)</a> <a href=javascript:void(0) ng-click="vm.division = \'masters\'" ng-class="{ \'active\' : vm.division == \'masters\' }" class="btn btn-default">Masters 50+ ($55)</a> <a href=javascript:void(0) ng-click="vm.division = \'team\'" ng-class="{ \'active\' : vm.division == \'team\' }" class="btn btn-default">Team of 3 ($120)</a></div><br><div class=row><div class=col-xs-4><div class=form-group><input class=form-control ng-class="{\'is-valid\': applicationForm.athlete1.$valid, \'is-dirty\': applicationForm.athlete1.$dirty && applicationForm.athlete1.hasBlurred}" ng-blur="applicationForm.athlete1.hasBlurred = applicationForm.athlete1.$dirty" ng-model=vm.athlete1 name=athlete1 type=text placeholder=Athlete required></div></div><div class=col-xs-8><label>T-shirt size<div class=btn-group><a href=javascript:void(0) ng-click="vm.athlete1size = \'small\'" ng-class="{ \'active\' : vm.athlete1size == \'small\' }" class="btn btn-default">S</a> <a href=javascript:void(0) ng-click="vm.athlete1size = \'medium\'" ng-class="{ \'active\' : vm.athlete1size == \'medium\' }" class="btn btn-default">M</a> <a href=javascript:void(0) ng-click="vm.athlete1size = \'large\'" ng-class="{ \'active\' : vm.athlete1size == \'large\' }" class="btn btn-default">L</a> <a href=javascript:void(0) ng-click="vm.athlete1size = \'xlarge\'" ng-class="{ \'active\' : vm.athlete1size == \'xlarge\' }" class="btn btn-default">XL</a> <a href=javascript:void(0) ng-click="vm.athlete1size = \'xxlarge\'" ng-class="{ \'active\' : vm.athlete1size == \'xxlarge\' }" class="btn btn-default">XXL</a></div></label></div></div><div class=row ng-show="vm.division == \'team\'"><div class=col-xs-4><div class=form-group><input class=form-control ng-class="{\'is-valid\': applicationForm.athlete2.$valid, \'is-dirty\': applicationForm.athlete2.$dirty && applicationForm.athlete2.hasBlurred}" ng-model=vm.athlete2 name=athlete2 type=text placeholder="Second athlete" required></div></div><div class=col-xs-8><label>T-shirt size<div class=btn-group><a href=javascript:void(0) ng-click="vm.athlete2size = \'small\'" ng-class="{ \'active\' : vm.athlete2size == \'small\' }" class="btn btn-default">S</a> <a href=javascript:void(0) ng-click="vm.athlete2size = \'medium\'" ng-class="{ \'active\' : vm.athlete2size == \'medium\' }" class="btn btn-default">M</a> <a href=javascript:void(0) ng-click="vm.athlete2size = \'large\'" ng-class="{ \'active\' : vm.athlete2size == \'large\' }" class="btn btn-default">L</a> <a href=javascript:void(0) ng-click="vm.athlete2size = \'xlarge\'" ng-class="{ \'active\' : vm.athlete2size == \'xlarge\' }" class="btn btn-default">XL</a> <a href=javascript:void(0) ng-click="vm.athlete2size = \'xxlarge\'" ng-class="{ \'active\' : vm.athlete2size == \'xxlarge\' }" class="btn btn-default">XXL</a></div></label></div></div><div class=row ng-show="vm.division == \'team\'"><div class=col-xs-4><div class=form-group><input class=form-control ng-class="{\'is-valid\': applicationForm.athlete3.$valid, \'is-dirty\': applicationForm.athlete3.$dirty && applicationForm.athlete3.hasBlurred}" ng-model=vm.athlete3 name=athlete3 type=text placeholder="Third athlete" required></div></div><div class=col-xs-8><label>T-shirt size<div class=btn-group><a href=javascript:void(0) ng-click="vm.athlete3size = \'small\'" ng-class="{ \'active\' : vm.athlete3size == \'small\' }" class="btn btn-default">S</a> <a href=javascript:void(0) ng-click="vm.athlete3size = \'medium\'" ng-class="{ \'active\' : vm.athlete3size == \'medium\' }" class="btn btn-default">M</a> <a href=javascript:void(0) ng-click="vm.athlete3size = \'large\'" ng-class="{ \'active\' : vm.athlete3size == \'large\' }" class="btn btn-default">L</a> <a href=javascript:void(0) ng-click="vm.athlete3size = \'xlarge\'" ng-class="{ \'active\' : vm.athlete3size == \'xlarge\' }" class="btn btn-default">XL</a> <a href=javascript:void(0) ng-click="vm.athlete3size = \'xxlarge\'" ng-class="{ \'active\' : vm.athlete3size == \'xxlarge\' }" class="btn btn-default">XXL</a></div></label></div></div><div class=row><div class=col-xs-12><div class=form-group><input class=form-control ng-class="{\'is-valid\': applicationForm.email.$valid, \'is-dirty\': applicationForm.email.$dirty && applicationForm.email.hasBlurred}" ng-blur="applicationForm.email.hasBlurred = applicationForm.email.$dirty" ng-model=vm.email name=email type=email placeholder=Email required></div></div></div><br><div class="alert alert-danger" ng-show="applicationErrors.length > 0"><div ng-repeat="err in applicationErrors">{{ err }}</div></div></form><form action=https://www.paypal.com/cgi-bin/webscr method=post target=_top ng-show="vm.division == \'individual\'"><input type=hidden name=cmd value=_s-xclick> <input type=hidden name=hosted_button_id value=RRWXBVJZWG964> <input type=hidden name=custom value="{{vm | json}}"> <input type=image src=https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif border=0 name=submit alt="PayPal - The safer, easier way to pay online!"> <img alt border=0 src=https://www.paypalobjects.com/en_US/i/scr/pixel.gif width=1 height=1></form><form action=https://www.paypal.com/cgi-bin/webscr method=post target=_top ng-show="vm.division == \'masters\'"><input type=hidden name=cmd value=_s-xclick> <input type=hidden name=hosted_button_id value=JXFM9X5VM5V5G> <input type=hidden name=custom value="{{vm | json}}"> <input type=image src=https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif border=0 name=submit alt="PayPal - The safer, easier way to pay online!"> <img alt border=0 src=https://www.paypalobjects.com/en_US/i/scr/pixel.gif width=1 height=1></form><form action=https://www.paypal.com/cgi-bin/webscr method=post target=_top ng-show="vm.division == \'team\'"><input type=hidden name=cmd value=_s-xclick> <input type=hidden name=hosted_button_id value=DDJTKLUTGEP6S> <input type=hidden name=custom value="{{vm | json}}"> <input type=image src=https://www.paypalobjects.com/en_US/i/btn/btn_paynowCC_LG.gif border=0 name=submit alt="PayPal - The safer, easier way to pay online!"> <img alt border=0 src=https://www.paypalobjects.com/en_US/i/scr/pixel.gif width=1 height=1></form></div></div></div></div></div></div><footer id=contact><div class="footer section"><div class=container><h1 class="title text-center" id=contact>Contact Us</h1><div class=space></div><div class=row><div class=col-sm-6><div class=footer-content><ul class=list-icons><li><i class="fa fa-map-marker pr-10"></i>12403 E 1st Ave,<br>Spokane Valley, WA 99216</li><li><i class="fa fa-phone pr-10"></i>(509) 863-7922</li><li><i class="fa fa-envelope-o pr-10"></i><a href=mailto:salem.giampietro@yahoo.com>salem.giampietro@yahoo.com</a></li></ul><ul class=social-links><li class=facebook><a target=_blank href=https://www.facebook.com/pages/HtmlCoder/714570988650168><i class="fa fa-facebook"></i></a></li><li class=twitter><a target=_blank href=https://twitter.com/HtmlcoderMe><i class="fa fa-twitter"></i></a></li><li class=youtube><a target=_blank href=http://www.youtube.com><i class="fa fa-youtube"></i></a></li></ul></div></div><div class=col-sm-6><div class=footer-content><form role=form id=footer-form><div class="form-group has-feedback"><label class=sr-only for=name2>Name</label> <input type=text class=form-control id=name2 placeholder=Name name=name2 required> <i class="fa fa-user form-control-feedback"></i></div><div class="form-group has-feedback"><label class=sr-only for=email2>Email address</label> <input type=email class=form-control id=email2 placeholder="Enter email" name=email2 required> <i class="fa fa-envelope form-control-feedback"></i></div><div class="form-group has-feedback"><label class=sr-only for=message2>Message</label> <textarea class=form-control rows=8 id=message2 placeholder=Message name=message2 required></textarea> <i class="fa fa-pencil form-control-feedback"></i></div><input type=submit value=Send class="btn btn-default" style="margin-bottom: 39px;"></form></div></div></div></div><div class=subfooter><div class=container><div class=row><div class=col-md-12><p class=text-center>Copyright © 2015 by <a target=_blank href=http://crawford.cc>Josh Crawford</a>.</p></div></div></div></div></div></footer>'),e.put("app/core/404.html",'<section id=dashboard-view class=mainbar><section class=matter><div class=container><div class=row><div class=col-md-12><ul class=today-datas><li class=bred><div class=pull-left><i class="fa fa-warning"></i></div><div class="datas-text pull-right"><a><span class=bold>404</span></a>Page Not Found</div><div class=clearfix></div></li></ul></div></div><div class=row><div class="widget wblue"><div ht-widget-header title="Page Not Found" allow-collapse=true></div><div class="widget-content text-center text-info"><div class=container>No soup for you!</div></div><div class=widget-foot><div class=clearfix></div></div></div></div></div></section></section>'),e.put("app/layout/shell.html",'<div ng-controller="ShellController as vm"><header class=clearfix><top-nav navline=vm.navline></top-nav></header><section id=content class=content><div ui-view class=shuffle-animation></div><div ngplus-overlay ngplus-overlay-delay-in=50 ngplus-overlay-delay-out=700 ngplus-overlay-animation=dissolve-animation><img src=images/busy.gif><div class="page-spinner-message overlay-message">{{vm.busyMessage}}</div></div></section></div>'),e.put("app/layout/top-nav.html",'<header class="header fixed clearfix navbar navbar-fixed-top"><div class=container><div class=row><div class=col-md-5><div class="header-left clearfix"><div class="logo smooth-scroll"><a href=#banner du-smooth-scroll><img id=logo src=images/logo.png alt="The Moxie Games"></a></div><div class="site-name-and-slogan smooth-scroll"><div class=site-name><a href=#banner du-smooth-scroll>The Moxie Games</a></div><div class=site-slogan>Women\'s only CrossFit competition</div></div></div></div><div class=col-md-7><div class="header-right clearfix"><div class="main-navigation animated"><nav class="navbar navbar-default" role=navigation><div class=container-fluid><div class=navbar-header><button type=button class=navbar-toggle data-toggle=collapse data-target=#navbar-collapse-1><span class=sr-only>Toggle navigation</span> <span class=icon-bar></span> <span class=icon-bar></span> <span class=icon-bar></span></button></div><div class="collapse navbar-collapse scrollspy smooth-scroll" id=navbar-collapse-1><ul class="nav navbar-nav navbar-right"><li><a href=#banner du-smooth-scroll du-scrollspy>Home</a></li><li><a href=#register du-smooth-scroll du-scrollspy>Register</a></li><li><a href>Leaderboard</a></li><li><a href=#contact du-smooth-scroll du-scrollspy>Contact</a></li></ul></div></div></nav></div></div></div></div></div></header>'),e.put("app/widgets/widget-header.html",'<div class=widget-head><div class="page-title pull-left">{{title}}</div><small class=page-title-subtle ng-show=subtitle>({{subtitle}})</small><div class="widget-icons pull-right"></div><small class="pull-right page-title-subtle" ng-show=rightText>{{rightText}}</small><div class=clearfix></div></div>')}]);