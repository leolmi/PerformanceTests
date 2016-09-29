'use strict';

angular.module('testApp')
  .run(['compatibilityTestService', function(compatibilityTestService) {
    compatibilityTestService.addTest({
      title: 'Dev-Express Widgets',
      desc: 'Permette di inserire n widgets Dev-Express e testare le risorse.',
      directive: 'widgets-devexpress-test'
    });
  }])
  .directive('widgetsDevexpressTest', ['compatibilityTestService','TestManager',
    function(compatibilityTestService, TestManager) {
    return {
      templateUrl: 'devexpress-test.html',
      replace: true,
      scope: {},
      link: function (scope, ele) {
        scope.manager = new TestManager({
          title: 'Dev-Express widgets', 
          currentType:'grid', 
          description:'Inserire 2-3 griglie + 2 grafici e tutti i componenti e le widgets sembrerano come bloccate nell\'utilizzo.'+
                      '\nLa risposta agli eventi del mouse appare ritardata con una complessiva sensazione di pagina collassata.'});
        scope.manager.availableTypes = [
          {type: 'grid', desc: 'Griglia', icon: 'view_module'},
          {type: 'chart', desc: 'Grafico', icon: 'equalizer'}
        ];

        scope.gridOptions = {
          dataSource: compatibilityTestService.customers,
          selection: {
            mode: "single"
          },
          height: 300,
          hoverStateEnabled: true,
          // paging: {
          //   pageSize: 10
          // },
          // pager: {
          //   showPageSizeSelector: true,
          //   allowedPageSizes: [5, 10, 20],
          //   showInfo: true
          // },
          columns: ["CompanyName", "City", "State", "Phone", "Fax"],
        };

        scope.chartOptions = {
          dataSource: compatibilityTestService.customers,
          animation: {
            enabled: false
          },
          redrawOnResize: false,
          commonSeriesSettings: {
            argumentField: "CompanyName",
            type: "bar"
          },
          series: [
            {
              valueField: "ID",
              name: "Identità",
              hoverMode: "none"
            }
          ],
          legend: {
            verticalAlignment: "bottom",
            horizontalAlignment: "center",
            itemTextPosition: 'top'
          },
          valueAxis: {
            title: {
              text: "ID"
            },
            position: "right"
          },
          title: "Test Chart",
          tooltip: {
            enabled: true,
            location: "edge",
            customizeTooltip: function (arg) {
              return {
                text: arg.seriesName + " id: " + arg.valueText
              };
            }
          }
        };
      }
    }
  }]);

