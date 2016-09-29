/* Created by Leo on 27/09/2016. */
'use strict';

angular.module('testApp')
  .factory("TestManager", ['$timeout',
    function($timeout) {

      /**
       * Generate new GUID
       * @returns {string}
       */
      function _guid() {
        function s4() {
          return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
        }

        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
          s4() + '-' + s4() + s4() + s4();
      }

      var TestManager = function (info) {
        this.title = 'Performance tester';
        this.elements = [];
        this.availableTypes = [];
        this.currentType = '';
        this.elementsDesc = '';
        this.addAsHtmlElement = false;
        if (info)
          _.extend(this, info);
      };

      TestManager.prototype = {
        title: '',
        elements: [],
        availableTypes: [],
        currentType: '',
        elementsDesc: '',
        addAsHtmlElement: false,
        calcDesc: function () {
          var self = this;
          var desc = '';
          var stat = {};
          self.elements.forEach(function (e) {
            stat[e.type] = stat[e.type] ? (stat[e.type] + 1) : 1;
          });
          _.keys(stat).forEach(function (k) {
            if (desc) desc += ' + ';
            desc += stat[k] + ' ' + k;
            if (stat[k] > 1) desc += 's';
          });
          self.elementsDesc = desc || 'no elements';
        },

        addElement: function () {
          var self = this;
          var e = {type: self.currentType, id: _guid()};

          self.elements.push(e);
          self.calcDesc();
          if (self.addAsHtmlElement) {
            var $container = $('#tests-elements-container');
            if (!$container || !$container.length) return console.error('container is not defined (addAsHtmlElement=true)!');
            $('<div id="'+e.id+'" ng-non-bindable></div>').appendTo($container);
          }
          $timeout(function () {
            var o = _.find(self.availableTypes, function (ot) {
              return ot.type == e.type;
            });
            if (o && o.create) o.create(e);
          }, 500);
        },

        removeElement: function (skip) {
          var self = this;
          var i = self.elements.length - 1;
          if (i > -1) {
            var e = self.elements.splice(i, 1);
            if (self.addAsHtmlElement)
              $('#'+e[0].id).remove();
          }
          if (!skip) self.calcDesc();
        },

        removeAll: function () {
          var self = this;
          do {
            self.removeElement(true);
          } while(self.elements.length);
          self.calcDesc();
        }
      };

      return (TestManager);
    }])
  .directive('testManagerEditor', ['$rootScope',
    function($rootScope) {
      return {
        restrict: 'E',
        templateUrl: 'test-manager-editor.html',
        scope: {manager:'='}
      }
    }]);
