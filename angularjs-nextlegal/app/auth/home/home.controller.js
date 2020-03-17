(function() {
    angular
        .module('app')
        .controller('HomeController', homeController);

    homeController.$inject = ['$http', '$state', 'authService'];
    function homeController($http, $state, authService) {
        var vm = this;

        vm.auth = authService;

        vm.message = '';
        vm.getMessage = function() {
            $http.get('http://localhost:8080/authorized').then(
                function(result) {
                    vm.message = result.data.message;
                },
                function(err) {
                    console.log(err);
                }
            );
        };

        if (authService.isAuthenticated()) {
            vm.profile = JSON.parse(localStorage.getItem('profile'));
        }
    }
})();