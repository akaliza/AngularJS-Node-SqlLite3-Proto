angular.module('craining.participants')
    .controller(
        'ParticipantsListController',
        ParticipantsListController);

ParticipantsListController.$inject = ['ParticipantsService', '$scope'];

function ParticipantsListController(ParticipantsService, $scope) {

    function initialization() {
        ParticipantsService.getParticipants()
            .then(
                function (data) {
                    $scope.list = data;
                });
    }

    initialization();

    $scope.remove = function (item) {
        ParticipantsService
            .removeParticipant(item.id)
            .then(function () {
                initialization();
            });
    }
}