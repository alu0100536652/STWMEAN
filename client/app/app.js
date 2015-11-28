var guachincheApp = angular.module('guachincheApp', ['ngRoute','guachincheAppDirectives','guachincheAppController','guachincheServices']);

guachincheApp.config(function($routeProvider, $locationProvider) {
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
    
    $locationProvider.html5Mode(true);
})