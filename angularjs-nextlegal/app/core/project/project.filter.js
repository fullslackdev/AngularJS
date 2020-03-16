'use strict';

angular.
    module('core', []).
    filter('projectFilter', function($locale, $filter) {
        $locale.NUMBER_FORMATS.DECIMAL_SEP = ",";
        $locale.NUMBER_FORMATS.GROUP_SEP = ".";
        return function(input) {
            return $filter('number')(input / 1.21, 2);
        };
    }).
    filter('taxFilter', function($filter) {
        return function(input) {
            return $filter('number')(input, 2);
        };
    });