var controllerModule = angular.module('guachincheAppController', [])

controllerModule.controller('createNewGuachincheController', function ($scope,guachincheServices) {
    
    $scope.municipios = { "name": ["Tacoronte", "El Sauzal", "La Matanza", "La Victoria", "Santa Úrsula"]}
    
    $scope.insertGuachinche = function () {
        
        var dataGuachinche = {
            name: $scope.name,
            direction: $scope.direction,
            city: $scope.city
        }
        
        console.log("Guachinche: " + dataGuachinche)
        
        guachincheServices.insertGuachinche(dataGuachinche)
            .success(function (data) {
                console.log("Status success: " + data.message)
                $scope.screen = true
                $scope.message = data.message
            }).
            error(function(error) {
                console.log("Status error: " + error.message)
                $scope.screen = true
                $scope.message = error.message
            });
        
    }
    
})