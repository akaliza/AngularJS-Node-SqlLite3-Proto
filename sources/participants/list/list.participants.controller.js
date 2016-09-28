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

    $scope.$on('cardData', function(event, data){
        //event.preventDefault();
        event.stopPropagation();
        console.log("Received data: ", data);
    });

    $scope.remove = function (item) {
        ParticipantsService
            .removeParticipant(item.id)
            .then(function () {
                initialization();
            });
    }
}