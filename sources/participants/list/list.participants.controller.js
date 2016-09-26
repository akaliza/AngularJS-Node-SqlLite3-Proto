angular.module('craining.participants')
    .controller(
        'ParticipantsListController',
        ParticipantsListController);

ParticipantsListController.$inject = ['StorageService', '$scope'];

function ParticipantsListController(StorageService, $scope) {
    $scope.list = StorageService.getData('participants');


    $scope.remove = function (index) {
        $scope.list.splice(index, 1);
    }
}