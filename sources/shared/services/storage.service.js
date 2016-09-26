angular.module('shared').service('StorageService', StorageService);

StorageService.$inject = [];

function StorageService() {

    var globalObject = {
        participants: [
            {name: 'batman', email: 'batman@sourceforge.net'},
            {name: 'superman', email: 'superman@sourceforge.net'},
            {name: 'dexter', email: 'dexter@sourceforge.net'},
            {name: 'rick', email: 'rick@sourceforge.net'},
            {name: 'phillip', email: 'phillip@sourceforge.net'},
            {name: 'finn', email: 'finn@sourceforge.net'}
        ]
    };

    function log(obj) {
        console.log(obj);
    }

    this.storeData = function (collection, data) {
        var localCollection = globalObject[collection];

        if (!localCollection) {
            globalObject[collection] =
                localCollection = [];
        }

        localCollection.push(data);
        log(globalObject);
    };


    this.getData = function(collection) {
        return globalObject[collection];
    }

}