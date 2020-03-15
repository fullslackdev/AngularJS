'use strict';

angular.
    module('phoneList').
    component('phoneList', {
        controllerAs: 'bla',
        templateUrl: 'phone-list/phone-list.template.html',
        // controller: ['$http',
        //     function PhoneListController($http) {
        //         var self = this;
        //         self.orderProp = 'age';
        //
        //         $http.get('phones/phones.json').then(function(response) {
        //             self.phones = response.data; // all the data
        //             // self.phones = response.data.slice(0, 5); // get first 5 items
        //             // self.phones = response.data.slice(5, 10); // get items 6 tot 10
        //         });
        //     }
        // ]
        controller: ['Phone',
            function PhoneListController(Phone) {
                this.phones = Phone.query();
                this.orderProp = 'age';
            }
        ]
    });