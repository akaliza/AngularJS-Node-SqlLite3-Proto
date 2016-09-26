angular.module('craining')
    .controller('CrainingController', CrainingController);

CrainingController.$inject = ['$scope'];

function CrainingController($scope) {

    $scope.state =
        'sources/participants/add/add.participant.template.html';

    $scope.switchTo = function (state) {
        if (state === 1) {
            $scope.state = 'sources/participants/add/add.participant.template.html';
        } else {
            $scope.state = 'sources/participants/list/list.participants.template.html';
        }

    }

}