angular.module('app').service('Api', Api);

Api.$inject = ['$q', '$http'];

function Api($q, $http) {

    let domain = 'http://localhost:9000',
        apiPrefix = '/api';

    this.callApi = function (method, path, params, data, callOptions) {

        let options = callOptions || {},
            defer = $q.defer(),
            headers = {
                "Content-Type": options.contentType || "application/json"
            },
            completeUrl = domain.concat(apiPrefix).concat(path),
            apiOptions = {
                url: completeUrl,
                method: method,
                headers: headers,
                data: data,
                params: params
            };

        $http(apiOptions).then((data) => {
            defer.resolve(data.data);
        }, (err) => {
            defer.reject(err);
        });

        return defer.promise;

    }

}