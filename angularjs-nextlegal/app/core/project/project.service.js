'use strict';

angular.
    module('core.project').
    factory('ProjectFactory', ['$resource', '$location', 'authService',
        function($resource, $location, authService) {
            if (authService.isAuthenticated()) {
                return $resource('projects/json/:projectId.json', {}, {
                    query: {
                        method: 'GET',
                        params: {projectId: 'projects'},
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