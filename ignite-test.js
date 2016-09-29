/* Created by Leo on 26/09/2016. */
'use strict';

angular.module('testApp')
  .run(['compatibilityTestService', function(compatibilityTestService) {
    compatibilityTestService.addTest({
      title: 'Infragistics Widgets',
      desc: 'Permette di inserire n widgets Infragistics e testarne le risorse.',
      directive: 'widgets-ignite-test'
    });
  }])
  .directive('widgetsIgniteTest', ['TestManager','compatibilityTestService','$rootScope',
    function(TestManager, compatibilityTestService,$rootScope) {
      return {
        templateUrl: 'ignite-test.html',
        scope: {},
        link: function (scope, ele, atr) {
          var GridOptions = function() {
            this.primaryKey = "ProductID";
            this.width = '100%';
            this.columns = [
              { headerText: "Product ID", key: "ProductID", dataType: "number", width: "15%", hidden: true },
              { headerText: "Image", key: "ImageUrl", dataType: "string", width: "15%", template: "<img src=\"${ImageUrl}\"/>" },
              { headerText: "Product Name", key: "ProductName", dataType: "string", width: "25%" },
              { headerText: "Category", key: "CategoryName", dataType: "string", width: "25%" },
              { headerText: "Units In Stock", key: "InStock", dataType: "number", width: "35%" }
            ];
            this.autofitLastColumn = false;
              this.autoGenerateColumns = false;
              this.dataSource = compatibilityTestService.products;
              this.responseDataKey = "results";
              this.autoCommit = true;
              this.features = [{
                name: "Sorting",
                sortingDialogContainment: "window"
              }, {
                name: "Filtering",
                type: "local",
                columnSettings: [{
                    columnKey: "ImageUrl",
                    allowFiltering: false
                  }, {
                    columnKey: "InStock",
                    condition: "greaterThan"
                  }]
              }, {
                name: "GroupBy",
                columnSettings: [{
                    columnKey: "CategoryName",
                    isGroupBy: true
                  }]
              }, {
                name: "Selection"
              }, {
                name: "Paging",
                pageSize: 10
              }, {
                name: "Resizing"
              }, {
                name: "Updating",
                editMode: "dialog",
                enableAddRow: false,
                columnSettings: [{
                    columnKey: "ImageUrl",
                    readOnly: false
                  }]
              }];
          };
          var ChartOptions = function() {
            this.width= "100%";
            this.height= "400px";
            this.title = "Population per Country";
            this.subtitle = "Five largest projected populations for 2015";
            this.dataSource = compatibilityTestService.chartdata;
            this.axes = [{
                name: "NameAxis",
                type: "categoryX",
                title: "Country",
                label: "CountryName"
              }, {
                name: "PopulationAxis",
                type: "numericY",
                minimumValue: 0,
                title: "Millions of People",
              }];
            this.series = [{
              name: "2015Population",
              type: "column",
              isHighlightingEnabled: true,
              isTransitionInEnabled: true,
              xAxis: "NameAxis",
              yAxis: "PopulationAxis",
              valueMemberPath: "Pop2015"
            }];
          };

          scope.manager = new TestManager({
            title: 'Infragistics Widgets', 
            description:'Come i componenti Kendo anche questi, aggiungendo solo 2 grid e 2 chart, portano rapidamente a percepire una sensazione di pesantezza della pagina.\n'+
                        'Anche in questo caso i controlli angular-material diventano da subito molto lenti e "legnosi"',
            currentType:'grid', 
            addAsHtmlElement:true});
          scope.manager.availableTypes = [{
            type: 'grid',
            desc: 'Griglia',
            icon: 'view_module',
            options: new GridOptions(),
            create: function(e) {
              $("#" + e.id).igGrid(this.options);
            }
          }, {
            type: 'chart',
            desc: 'Grafico',
            icon: 'equalizer',
            options: new ChartOptions(),
            create: function(e) {
              $("#" + e.id).igDataChart(this.options);
            }
          }];
        }
      }
    }]);
