(function() {

    angular
        .module('app', ['auth0.auth0', 'ui.router', 'angular-jwt'])
        .config(config);

    config.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        '$httpProvider',
        'angularAuth0Provider',
        'jwtOptionsProvider'
    ];

    function config(
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
        $httpProvider,
        angularAuth0Provider,
        jwtOptionsProvider
    ) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'auth/home/home.html',
                controllerAs: 'vm'
            })
            .state('callback', {
                url: '/callback',
                controller: 'CallbackController',
                templateUrl: 'auth/callback/callback.html',
                controllerAs: 'vm'
            })
            .state('clientList', {
                url: '/clients',
                component: 'clientListComponent'
            })
            .state('clientDetail', {
                url: '/clients/:clientIdParam',
                component: 'clientDetailComponent'
            })
            .state('projectList', {
                url: '/projects',
                component: 'projectListComponent'
            })
            .state('projectDetail', {
                url: '/projects/:projectIdParam',
                component: 'projectDetailComponent'
            })
            .state('projectNoteDetail', {
                url: '/projects/:projectIdParam/note/:projectNoteIdParam',
                component: 'projectNoteDetailComponent'
            })
            .state('profile', {
                url: '/profile',
                controller: 'ProfileController',
                templateUrl: 'auth/profile/profile.html',
                controllerAs: 'vm'
            })
            .state('unauthorized', {
                url: '/401',
                templateUrl: 'auth/error/401.html'
            });

        angularAuth0Provider.init({
            clientID: 'KxSQPbYe2zVmRrAsp5k61uD0W7WcM5H3',
            domain: 'fullslack.eu.auth0.com',
            responseType: 'token id_token',
            redirectUri: 'http://localhost:8001/#callback',
            scope: 'openid profile',
            audience: 'https://fullslack.dev/api'
        });

        jwtOptionsProvider.config({
            tokenGetter: function() {
                return localStorage.getItem('access_token');
            },
            whiteListedDomains: ['localhost']
        });

        $httpProvider.interceptors.push('jwtInterceptor');

        $urlRouterProvider.otherwise('/');

        $locationProvider.hashPrefix('');

        $locationProvider.html5Mode(false);
    }
})();