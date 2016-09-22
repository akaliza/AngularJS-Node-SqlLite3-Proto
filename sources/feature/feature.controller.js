angular.module('feature').controller('FeatureController', FeatureController);

FeatureController.$inject = [];

function FeatureController() {

    let vm = this;

    vm.message = 'Feature';

    return vm;
}