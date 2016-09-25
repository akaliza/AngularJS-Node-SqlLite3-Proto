var app = angular.module('app',
    [
        'ui.router',
        'ngMessages',
        'pascalprecht.translate',

        'app.feature'
    ]);

app
    .config(['$stateProvider', '$urlRouterProvider', '$httpProvider', '$translateProvider', '$compileProvider',
        function ($stateProvider, $urlRouterProvider, $httpProvider, $translateProvider, $compileProvider) {

            $httpProvider.defaults.withCredentials = false;
            $urlRouterProvider.otherwise("/feature");

            $translateProvider.translations('en_US', locale_en_us);
            $translateProvider.preferredLanguage('en_US');

            $compileProvider.aHrefSanitizationWhitelist(/^(itms-services|http|https):/);

        }])
    .run(['$rootScope', '$state', '$stateParams',
        function ($rootScope, $state, $stateParams) {

        }]);


