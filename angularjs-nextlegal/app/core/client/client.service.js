'use strict';

angular.
    module('core.client').
    factory('ClientFactory', ['$resource',
        function($resource) {
            return $resource('phones/:phoneId.json', {}, {
                query: {
                    method: 'GET',
                    params: {phoneId: 'phones'},
                    isArray: true
                }
            });
        }
    ]);