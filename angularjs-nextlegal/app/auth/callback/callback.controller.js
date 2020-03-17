(function() {
    angular
        .module('app')
        .controller('CallbackController', callbackController);

    callbackController.$inject = ['$state'];
    function callbackController($state) {
        $state.go('home');
    }
})();