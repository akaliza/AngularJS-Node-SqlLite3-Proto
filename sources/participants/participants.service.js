angular.module('craining.participants')
    .service('ParticipantsService', ParticipantsService);

ParticipantsService.$inject = ['GatewayService'];

function ParticipantsService(GatewayService) {

    var entity = 'participants';

    this.getParticipants = function (id) {
        var individualize = id ? '/' + id : '';
        return GatewayService
            .callApi('GET', entity + individualize);
    };

    this.addParticipant = function (participant) {
        return GatewayService
            .callApi('PUT', entity, participant)
    };

    this.updateParticipant = function (participant) {
        return GatewayService
            .callApi('PATCH', entity + "/" + participant.id, participant)
    };

    this.removeParticipant = function (id) {
        var url = entity + '/' + id;
        return GatewayService
            .callApi('DELETE', url);
    }


}