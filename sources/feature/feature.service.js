angular.module('app.feature').service('FeaturesService', FeaturesService);

FeaturesService.$inject = ['Api'];

function FeaturesService(Api) {

    this.list = function (page) {
        return Api.callApi('GET', '/features', {page: page});
    };

    this.store = function (feature) {
        return Api.callApi('PUT', '/features', undefined, feature);
    };

    this.load = function (id) {
        return Api.callApi('GET', '/features'.concat(id));
    }

}