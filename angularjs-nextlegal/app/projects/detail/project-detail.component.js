'use strict';

// Register `projectDetailModule` component, along with its associated controller and template
angular.
    module('projectDetailModule').
    component('projectDetailComponent', {
        templateUrl: 'projects/detail/project-detail.template.html',
        controller: ['$routeParams', 'ProjectFactory',
            function ProjectDetailController($routeParams, Project) {
                var self = this;

                self.project = Project.get({projectId: $routeParams.projectIdParam}, function(project) {
                    self.setImage(project.images[0]);
                });

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };
            }
        ]
    });