angular.module('rooms', ['shared'])
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'main.rooms',
                url: '/rooms',
                templateUrl: 'sources/rooms/rooms.template.html',
                controller:'RoomsController'
            })});