'use strict';

// Register `clientDetailModule` component, along with its associated controller and template
angular.
    module('clientDetailModule').
    component('clientDetailComponent', {
        templateUrl: 'clients/detail/client-detail.template.html',
        controller: ['$routeParams', 'ClientFactory',
            function ClientDetailController($routeParams, Client) {
                var self = this;

                self.client = Client.get({phoneId: $routeParams.phoneId}, function(client) {
                    self.setImage(client.images[0]);
                });

                self.setImage = function setImage(imageUrl) {
                    self.mainImageUrl = imageUrl;
                };
            }
        ]
    });