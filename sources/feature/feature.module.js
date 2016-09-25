
let featureModule = angular.module('app.feature', []);

featureModule.config(['$stateProvider', ($stateProvider) => {
    $stateProvider
        .state('feature', {
            url: "/feature",
            templateUrl: "./sources/feature/feature.template.html",
            controller: "FeatureController",
            controllerAs: "vm"
        })
}]);