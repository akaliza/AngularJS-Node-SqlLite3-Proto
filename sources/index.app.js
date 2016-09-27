var app = angular.module('craining', [
    'ui.router',

    'shared',
    'craining.participants',
    'rooms'
]);

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state({
            name: 'main',
            url: '',
            templateUrl: 'sources/craining.template.html',
            controller: 'CrainingController'
        });

    $urlRouterProvider.otherwise("/participants/list");
});