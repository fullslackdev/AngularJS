'use strict';

angular.
    module('nextlegalApp').
    config(['$routeProvider',
        function config($routeProvider) {
            $routeProvider.
                when('/clients', {
                    template: '<client-list-component></client-list-component>' // This is translated to the component name
                }).
                when('/clients/:clientIdParam', {
                    template: '<client-detail-component></client-detail-component>'
                }).
                otherwise('/clients');
        }
    ]);