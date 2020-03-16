'use strict';

angular.
    module('clientListModule').
    component('clientListComponent', {
        controllerAs: 'vm',
        templateUrl: 'clients/list/client-list.template.html',
        controller: ['ClientFactory', 'authService',
            function ClientListController(Client, authService) {
                var self = this;
                self.clients = Client.query();
                self.orderProp = 'name';
                self.auth = authService;
            }
        ]
    });