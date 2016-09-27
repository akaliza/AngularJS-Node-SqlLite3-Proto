angular.module('craining.participants')
    .controller(
        'ParticipantsController', ParticipantsController);

ParticipantsController.$inject =
    ['$scope', 'ParticipantsService', 'participant'];

function ParticipantsController($scope, storage, participant) {

    $scope.model = participant;

    $scope.save = function () {
        storage
            .addParticipant($scope.model);
    }

}