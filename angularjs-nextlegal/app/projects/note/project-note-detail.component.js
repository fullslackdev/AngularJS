'use strict';

// Register `projectNoteDetailModule` component, along with its associated controller and template
angular.
    module('projectNoteDetailModule').
    component('projectNoteDetailComponent', {
        templateUrl: 'projects/note/project-note-detail.template.html',
        controller: ['$routeParams', 'ProjectFactory',
            function ProjectNoteDetailController($routeParams, Project) {
                var self = this;

                Project.get({projectId: $routeParams.projectIdParam}).$promise.then(function(data) {
                    self.project = data;
                    self.note = data.notes[$routeParams.projectNoteIdParam];
                });
            }
        ]
    });