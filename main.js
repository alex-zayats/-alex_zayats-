var app = angular.module('App', []);

app.controller('formController', ['$scope', function($scope) {
    }]);


app.directive('ageDirective', function() {
  return {
    restrict: 'A', //a - attribute, e - element, c - class
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.ageDirective = function(modelValue, viewValue) {

        if (modelValue>18 && modelValue<65) {
          return true;
        }

        return false;
        }
      }
    };
});

/*
DATE_REGEXP = /^[1-4]\d{1}[.][1][1-2][.][1-2][1-9]\d{2}$/;
app.directive('dateDirective', function() {
  return {
    restrict: 'A', //a - attribute, e - element, c - class
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.dateDirective = function(modelValue, viewValue) {

        if (DATE_REGEXP.test(modelValue)) {
          return true;
        }

        return false;
        }
      }
    };
});

STRING_REGEXP = /^[A-Z]\S{2,}\s{0,1}[A-Z]{0,1}\S{0,}$/;
app.directive('stringDirective', function() {
  return {
    restrict: 'A', //a - attribute, e - element, c - class
    require: 'ngModel',
    link: function(scope, elm, attrs, ctrl) {
        ctrl.$validators.dateDirective = function(modelValue, viewValue) {

        if (STRING_REGEXP.test(modelValue)) {
          return true;
        }

        return false;
        }
      }
    };
});
*/