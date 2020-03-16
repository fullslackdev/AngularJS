'use strict';

angular.
    module('core').
    filter('testFilter', function() {
        return function(clients, filterInput) {
            return arrayIntersection(clients, filterInput);

            function arrayIntersection(a, b) {
                return a.filter(function(x) {
                    return b.indexOf(x.id) !== -1;
                });
            }
        };
    });