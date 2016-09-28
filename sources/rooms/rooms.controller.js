angular.module('rooms')
    .controller('RoomsController', RoomsController);

RoomsController.$inject = ['$scope', 'RoomsService'];

function RoomsController($scope, RoomsService) {

    $scope.room = {};

    function initialize() {
        RoomsService.getRooms().then(function (data) {
            $scope.rooms = data;
        })
    }

    initialize();

    $scope.selectRoom = function(item) {
        $scope.room = angular.copy(item);
    };

    $scope.addRoom = function () {
        console.log('flore...');
        RoomsService.addRoom($scope.room).then(

            function () {
                initialize();
            }
        );

        $scope.room = {};
    };

    $scope.deleteRoom = function (room) {
        RoomsService.deleteRoom(room.id).then(
            function () {
                initialize();
            }
        );
    };

    $scope.cancel = function() {
        $scope.room = {};
    };

    $scope.updateRoom = function() {
        RoomsService.updateRoom($scope.room).then(
            function () {
                initialize();
            }
        );

        $scope.room = {};
    }

}