'use strict';

angular.
    module('core.client').
    factory('ClientFactory', ['$resource',
        function($resource) {
            return $resource('clients/json/:clientId.json', {}, {
                query: {
                    method: 'GET',
                    params: {clientId: 'clients'},
                    isArray: true,
                    cache: true
                }
            });
        }
    ]);