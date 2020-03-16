'use strict';

angular.
    module('core.client').
    factory('ClientFactory', ['$resource', '$location', 'authService',
        function($resource, $location, authService) {
            if (authService.isAuthenticated()) {
                return $resource('clients/json/:clientId.json', {}, {
                    query: {
                        method: 'GET',
                        params: {clientId: 'clients'},
                        isArray: true,
                        cache: true
                    }
                });
            } else {
                $location.path('/401');
                return '';
            }
        }
    ]);