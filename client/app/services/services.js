var guachincheServicesModule = angular.module('guachincheServices', []);

guachincheServicesModule.factory('guachincheServices', ['$http', function($http) {

    var urlBase = '/api/guachinches';
    var dataFactory = {};

    dataFactory.getGuachinches = function () {
        return $http.get(urlBase);
    };

    dataFactory.insertGuachinche = function (data) {
        return $http.post(urlBase, data);
    };
    
    dataFactory.getGuachinche = function (id) {
        return $http.get(urlBase + '/check', {headers: {'name': id}})
    };

    return dataFactory;
}])