/* Created by Leo on 28/09/2016. */
'use strict';

angular.module('testApp')
  .controller('Home', ['$scope',
    function ($scope) {

      $scope.currentEchoTheme = 'default';

      $scope.title = 'Angular+Material Widgets Tests';
      $scope.tests = [
        {title: 'DevExpress', url: 'devexpress', description:'Sembra estremamente lento su IE & Edge. Unico set di componenti in formato di direttive angular.'},
        {title: 'Kendo', url: 'kendo', description:'Anche se con migliori prestazioni appaiono lenti se confrontati ad altri browser. Componenti sviluppati in jQuery.'},
        {title: 'Highcharts', url: 'highcharts', description:'Lenti ma con prestazioni superiori su IE & Edge. Solo grafici sviluppati in jQuery,.'},
        {title: 'Infragistics', url: 'infragistics', description:'Lenti su IE & Edge. Componenti sviluppati in jQuery.'}
      ];
  }]);
