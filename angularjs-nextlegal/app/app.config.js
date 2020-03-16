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
                when('/projects', {
                    template: '<project-list-component></project-list-component>'
                }).
                when('/projects/:projectIdParam', {
                    template: '<project-detail-component></project-detail-component>'
                }).
                when('/projects/:projectIdParam/note/:projectNoteIdParam', {
                    template: '<project-note-detail-component></project-note-detail-component>'
                }).
                otherwise('/clients');
        }
    ]);