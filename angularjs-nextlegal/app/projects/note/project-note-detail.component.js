'use strict';

// Register `projectNoteDetailModule` component, along with its associated controller and template
angular.
    module('projectNoteDetailModule').
    component('projectNoteDetailComponent', {
        controllerAs: 'vm',
        templateUrl: 'projects/note/project-note-detail.template.html',
        controller: ['$stateParams', 'ProjectFactory', 'authService',
            function ProjectNoteDetailController($stateParams, Project, authService) {
                var self = this;

                if (authService.isAuthenticated()) {
                    Project.get({projectId: $stateParams.projectIdParam}).$promise.then(function (data) {
                        self.project = data;
                        self.note = data.notes[$stateParams.projectNoteIdParam];
                    });
                }

                self.auth = authService;
            }
        ]
    });