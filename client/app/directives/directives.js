var directiveModule = angular.module('guachincheAppDirectives', []);

directiveModule.directive('formAddGuachinche', function() {
    return {
        restrict: 'E',
        templateUrl: "views/partials/form-new-guachinche.html"
    }
})

directiveModule.directive('guachincheDetail', function() {
    return {
        restrict: 'E',
        templateUrl: "views/partials/guachinche-view.html"
    }
})

directiveModule.directive('guachincheItem', function() {
    return {
        restrict: 'E',
        templateUrl: "views/partials/guachinche-item.html"
    }
})

