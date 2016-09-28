
angular
    .module('craining.participants', ['shared'])
    .config(function ($stateProvider) {
        $stateProvider
            .state({
                name: 'main.participants',
                url: '/participants',
                templateUrl: 'sources/participants/participants.template.html'
            })
            .state({
                name: 'main.participants.list',
                url: '/list',
                templateUrl: 'sources/participants/list/list.participants.template.html',
                controller: 'ParticipantsListController'
            })
            .state({
                name: 'main.participants.cardlist',
                url: '/cardlist',
                templateUrl: 'sources/participants/cardlist/cardlist.participants.template.html',
                controller: 'ParticipantsListController'
            })
            .state({
                name: 'main.participants.add',
                url: '/add',
                resolve: {
                    participant: function () {
                        return {};
                    }
                },
                templateUrl: 'sources/participants/add/add.participant.template.html',
                controller: 'ParticipantsController'
            })
            .state({
                name: 'main.participants.edit',
                resolve: {
                    participant: function ($stateParams, ParticipantsService) {
                        return ParticipantsService.getParticipants($stateParams.id)
                    }
                },
                url: '/edit/:id',
                templateUrl: 'sources/participants/add/add.participant.template.html',
                controller: 'ParticipantsController'
            });
    });