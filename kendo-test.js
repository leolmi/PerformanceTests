'use strict';

angular.module('testApp')
  .run(['compatibilityTestService', function(compatibilityTestService) {
    compatibilityTestService.addTest({
      title: 'Kendo Widgets',
      desc: 'Permette di inserire n widgets Kendo e testarne le risorse.',
      directive: 'widgets-kendo-test'
    });
  }])
  .directive('widgetsKendoTest', ['TestManager','compatibilityTestService',
    function(TestManager, compatibilityTestService) {
      return {
        templateUrl:'kendo-test.html',
        scope: {},
        link: function (scope, ele, atr) {
          var GridOptions = function() {
            this.dataSource = compatibilityTestService.customers;
            this.height = 550;
            this.groupable = true;
            this.sortable = true;
            this.pageable = {
              refresh: true,
              pageSizes: true,
              buttonCount: 5
            };
            this.columns = [{
              field: "CompanyName",
              title: "Company Name",
              width: 240
            }, {
              field: "City",
              title: "City"
            }, {
              field: "State",
              title: "State"
            }, {
              field: "Phone",
              width: 150
            }, {
              field: "Fax",
              width: 150
            }];
          };
          var ChartOptions = function() {
            this.title = {
              text: "Gross domestic product growth \n /GDP annual %/"
            };
            this.legend = {
              position: "bottom"
            };
            this.seriesDefaults = {
              type: "area",
              area: {
                line: {
                  style: "smooth"
                }
              }
            };
            this.series = [{
              name: "India",
              data: [3.907, 7.943, 7.848, 9.284, 9.263, 9.801, 3.890, 8.238, 9.552, 6.855]
            }, {
              name: "World",
              data: [1.988, 2.733, 3.994, 3.464, 4.001, 3.939, 1.333, -2.245, 4.339, 2.727]
            }, {
              name: "Haiti",
              data: [-0.253, 0.362, -3.519, 1.799, 2.252, 3.343, 0.843, 2.877, -5.416, 5.590]
            }];
            this.valueAxis = {
              labels: {
                format: "{0}%"
              },
              line: {
                visible: false
              },
              axisCrossingValue: -10
            };
            this.categoryAxis = {
              categories: [2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011],
              majorGridLines: {
                visible: false
              },
              labels: {
                rotation: "auto"
              }
            };
            this.tooltip = {
              visible: true,
              format: "{0}%",
              template: "#= series.name #: #= value #"
            };
          };
          scope.manager = new TestManager({title: 'Kendo Widgets', customDraw:true, currentType:'grid', addAsHtmlElement:true});
          scope.manager.availableTypes = [{
            type: 'grid',
            desc: 'Griglia',
            icon: 'view_module',
            options: new GridOptions(),
            create: function(e) {
              $("#" + e.id).kendoGrid(this.options);
            }
          }, {
            type: 'chart',
            desc: 'Grafico',
            icon: 'equalizer',
            options: new ChartOptions(),
            create: function(e) {
              $("#" + e.id).kendoChart(this.options);
            }
          }];
        }
      }
    }]);
