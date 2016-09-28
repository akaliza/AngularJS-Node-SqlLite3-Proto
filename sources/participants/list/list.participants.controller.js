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

    $scope.$watch(function() {
        return $scope.someinput && $scope.someinput.toLowerCase() === 'awesome';
    }, function (newVal, oldVal) {
        $scope.showme = newVal;
    });

    initialization();

    $scope.$on('cardData', function (event, data) {
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