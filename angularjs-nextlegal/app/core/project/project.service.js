'use strict';

angular.
    module('core.project').
    factory('ProjectFactory', ['$resource',
        function($resource) {
            return $resource('projects/json/:projectId.json', {}, {
                query: {
                    method: 'GET',
                    params: {projectId: 'projects'},
                    isArray: true
                }
            });
        }
    ]);