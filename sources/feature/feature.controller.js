angular.module('app.feature').controller('FeatureController', FeatureController);

FeatureController.$inject = ['FeaturesService'];

function FeatureController(FeaturesService) {

    let vm = this;

    vm.list = [];
    vm.feature = {};

    FeaturesService.list().then((data) => {
        vm.list = data;
    });

    vm.submitFeature = function (form) {
        form.$setSubmitted(true);
        if (form.$valid) {
            var promise = FeaturesService.store(vm.feature);
            promise.then(() => {
                vm.list.push(vm.feature);
                vm.feature = {};
                form.$submitted = false;
            });
        }
    };


    return vm;
}