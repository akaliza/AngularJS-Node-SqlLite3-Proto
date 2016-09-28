angular.module('craining.participants')
    .controller(
        'ParticipantsController', ParticipantsController);

ParticipantsController.$inject =
    ['$scope', 'ParticipantsService', 'participant', '$state'];

function ParticipantsController($scope, storage, participant, $state) {

    $scope.model = participant;

    $scope.save = function () {
        storage
            .addParticipant($scope.model).then(
            function(data) {
                $state.go('main.participants.list');
            }
        );
    }

}