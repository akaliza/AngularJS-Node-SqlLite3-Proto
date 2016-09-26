angular.module('craining.participants')
    .controller(
        'ParticipantsController', ParticipantsController);

ParticipantsController.$inject =
    ['$scope', 'StorageService'];

function ParticipantsController($scope, storage) {
    var temp1 = 0;

    if (!temp1) {
        console.log('undefined');
    } else {
        console.log('Existst as ', temp1);
    }



    $scope.model = {
        name: 'Pseudo',
        surname: 'Name',
        email: 'pseudo.name@email.com'
    };

    $scope.save = function () {
        storage.storeData(
            'participants',
            $scope.model);

        //$scope.model = {};
    }

}