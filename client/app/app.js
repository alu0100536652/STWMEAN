var guachincheApp = angular.module('guachincheApp', ['ngRoute']);

    // configure our routes
    guachincheApp.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'views/pages/list.html'
            })
            .when('/new', {
                templateUrl : 'views/pages/new.html'
            })
            .when('/about', {
                templateUrl : 'views/pages/about.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    });