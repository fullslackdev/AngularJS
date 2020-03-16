'use strict';

// Register `projectDetailModule` component, along with its associated controller and template
angular.
    module('projectDetailModule').
    component('projectDetailComponent', {
        controllerAs: 'vm',
        templateUrl: 'projects/detail/project-detail.template.html',
        controller: ['$stateParams', 'ProjectFactory', 'authService',
            function ProjectDetailController($stateParams, Project, authService) {
                var self = this;

                if (authService.isAuthenticated()) {
                    self.project = Project.get({projectId: $stateParams.projectIdParam}, function (project) {
                        self.setImage(project.images[0]);
                    });
                }

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };

                self.auth = authService;
            }
        ]
    });