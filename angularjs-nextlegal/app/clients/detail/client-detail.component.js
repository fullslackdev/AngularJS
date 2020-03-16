'use strict';

// Register `clientDetailModule` component, along with its associated controller and template
angular.
    module('clientDetailModule').
    component('clientDetailComponent', {
        controllerAs: 'vm',
        templateUrl: 'clients/detail/client-detail.template.html',
        controller: ['$stateParams', 'ClientFactory', 'authService',
            function ClientDetailController($stateParams, Client, authService) {
                var self = this;

                self.client = Client.get({clientId: $stateParams.clientIdParam}, function(client) {
                    self.setImage(client.images[0]);
                });

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };
                self.auth = authService;
            }
        ]
    });