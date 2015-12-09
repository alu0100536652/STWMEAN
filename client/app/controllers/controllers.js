var controllerModule = angular.module('guachincheAppController', [])

controllerModule.controller('createNewGuachincheController', function ($location,$scope,guachincheServices) {
    
    $scope.municipios = { "name": ["Tacoronte", "El Sauzal", "La Matanza", "La Victoria", "Santa Úrsula","La Laguna", "La Orotava"]}
    
    $scope.change = function() {
        guachincheServices.getGuachinche($scope.name)
        .success(function (data) {
            $scope.count = data.message
        }).
        error(function(error) {
            console.log("Status error: " + error.message)
        })
    }
    
    
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

controllerModule.controller('listGuachincheController', function ($scope,guachincheServices) {
    
    guachincheServices.getGuachinches()
        .success(function (data) {
            console.log("Status success: " + data)
            $scope.guachinches = data
        }).
        error(function(error) {
            console.log("Status error: " + error.message)
            $scope.guachinches = {"name": "Ha ocurrido algún problema"}
        });
    
})