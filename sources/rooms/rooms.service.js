angular.module('rooms')
    .service('RoomsService', RoomsService);

RoomsService.$inject = ['GatewayService'];

function RoomsService(GatewayService) {

    var entity = 'room';

    this.getRooms = function() {
        return GatewayService
            .callApi('GET', entity);
    };

    this.addRoom = function(room) {
        return GatewayService
            .callApi('PUT', entity, room)
    };

    this.deleteRoom = function(id) {
        var url = entity+'/'+id;
        return GatewayService
            .callApi('DELETE', url);
    };

    this.updateRoom = function(room) {
        return GatewayService
            .callApi('PATCH', entity+'/'+room.id, room);
    }

}