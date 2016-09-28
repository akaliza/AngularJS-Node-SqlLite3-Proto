angular.module('shared')
    .directive('ourSwitch', OurSwitch);

OurSwitch.$inject = ['$compile'];

function OurSwitch($compile) {
    return {
        restrict: 'A',
        scope: true,
        compile: function (elem, attrs) {
            var cacheContent = elem.html();
            elem.html('');

            return function ($scope, elem, attrs) {
                var isolatedScope;
                $scope.$watch(attrs.ourSwitch,
                    function (newVal, oldVal) {
                        if (!newVal) {
                            isolatedScope = $scope.$new();
                            elem.append($compile(cacheContent)(isolatedScope));
                        } else {
                            elem.html('');
                            isolatedScope.$destroy();
                        }
                    });
            }
        }
    }
}