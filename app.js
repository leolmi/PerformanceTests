/* Created by Leo on 28/09/2016. */
'use strict';

angular
  .module('testApp', [
    'ngAnimate',
    'ngAria',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ui.router',
    'dx',
    'ngMaterial',
    'angular.filter'
  ])
  .config(['$locationProvider', '$stateProvider', '$urlRouterProvider',
    function ($locationProvider, $stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise("/");
        
      $stateProvider
        .state('home', {
          url: "/",
          templateUrl: "home.html",
          controller: "Home"
        })
        .state('devexpress', {
          url: "/devexpress",
          template: "<widgets-devexpress-test></widgets-devexpress-test>"
        })
        .state('kendo', {
          url: "/kendo",
          template: "<widgets-kendo-test></widgets-kendo-test>"
        })
        .state('highcharts', {
          url: "/highcharts",
          template: "<widgets-highcharts-test></widgets-highcharts-test>"
        })
        .state('infragistics', {
          url: "/infragistics",
          template: "<widgets-ignite-test></widgets-ignite-test>"
        });
    }])
    .config(['$mdThemingProvider', function($mdThemingProvider) {
        $mdThemingProvider.definePalette('dark-matter', {
            "50": "#e8e8e8",
            "100": "#bbbbbb", // background color
            "200": "#0a0a0a", // dropdown background
            "300": "#0f0f0f", // chips background
            "400": "#FFFFFF",
            "500": "#FFFFFF",
            "600": "#FFFFFF",
            "700": "#000000",
            "800": "#1b1b1b", // select background
            "900": "#000000", // modal background
            "A100": "#000000",
            "A200": "#000000",
            "A400": "#000000",
            "A700": "#000000"
        });

        $mdThemingProvider.theme('default')
            .primaryPalette('orange')
            .accentPalette('indigo')
            .backgroundPalette('dark-matter')
            .dark();
    }]);
