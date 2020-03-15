'use strict';

angular.
    module('clientListModule').
    component('clientListComponent', {
        controllerAs: 'vm',
        templateUrl: 'clients/list/client-list.template.html',
        controller: ['ClientFactory',
            function ClientListController(Client) {
                this.clients = Client.query();
                this.orderProp = 'age';
            }
        ]
    });