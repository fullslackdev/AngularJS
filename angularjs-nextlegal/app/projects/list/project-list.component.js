'use strict';

angular.
    module('projectListModule').
    component('projectListComponent', {
        controllerAs: 'vm',
        templateUrl: 'projects/list/project-list.template.html',
        controller: ['ProjectFactory',
            function ProjectListController(Project) {
                this.projects = Project.query();
                this.orderProp = 'name';
            }
        ]
    });