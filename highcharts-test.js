/* Created by Leo on 26/09/2016. */
'use strict';

angular.module('testApp')
  .run(['compatibilityTestService', function(compatibilityTestService) {
    compatibilityTestService.addTest({
      title: 'Highcharts Widgets',
      desc: 'Permette di inserire n grafici Highcharts e testarne le risorse.',
      directive: 'widgets-highcharts-test'
    });
  }])
  .directive('widgetsHighchartsTest', ['TestManager',
    function(TestManager) {
      return {
        templateUrl: 'highcharts-test.html',
        scope: {},
        link: function (scope, ele, atr) {
          var ChartOptions = function() {
            this.chart = {
              type: 'column'
            };
            this.title = {
              text: 'Monthly Average Rainfall'
            };
            this.subtitle = {
              text: 'Source: WorldClimate.com'
            };
            this.xAxis = {
              categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
              ],
              crosshair: true
            };
            this.yAxis = {
              min: 0,
              title: {
                text: 'Rainfall (mm)'
              }
            };
            this.tooltip = {
              headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
              pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
              '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
              footerFormat: '</table>',
              shared: true,
              useHTML: true
            };
            this.plotOptions = {
              column: {
                pointPadding: 0.2,
                borderWidth: 0
              }
            };
            this.series = [{
              name: 'Tokyo',
              data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]

            }, {
              name: 'New York',
              data: [83.6, 78.8, 98.5, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

            }, {
              name: 'London',
              data: [48.9, 38.8, 39.3, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

            }, {
              name: 'Berlin',
              data: [42.4, 33.2, 34.5, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

            }];
          };

          scope.manager = new TestManager({
            title: 'Highcharts charts', 
            description:'Il grafico con le migliori prestazioni.\n'+ 'Quello che si evince è comunque un rallentamento di performance dei controlli angular-material',
            currentType:'chart', 
            addAsHtmlElement:true});
          scope.manager.availableTypes = [{
            type: 'chart',
            desc: 'Grafico',
            icon: 'equalizer',
            options: new ChartOptions(),
            create: function(e) {
              $("#" + e.id).highcharts(this.options);
            }
          }];
        }
      }
    }]);
