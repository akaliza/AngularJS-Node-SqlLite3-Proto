angular.module('craining')
    .controller('CrainingController', CrainingController);

CrainingController.$inject = ['$scope'];

function CrainingController($scope) {

    $scope.triggerBulk = function () {
        $scope.$broadcast('bulk');
    };

    $scope.$on('cardData', function(event, data){
        console.log("Received data: ", data);
    });

    console.log("Craining Controller Initialized...")

}