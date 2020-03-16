'use strict';

angular.
    module('projectListModule').
    component('projectListComponent', {
        controllerAs: 'vm',
        templateUrl: 'projects/list/project-list.template.html',
        controller: ['ProjectFactory', 'authService',
            function ProjectListController(Project, authService) {
                var self = this;
                if (authService.isAuthenticated()) {
                    self.projects = Project.query();
                }
                self.orderProp = 'name';
                self.auth = authService;
            }
        ]
    });