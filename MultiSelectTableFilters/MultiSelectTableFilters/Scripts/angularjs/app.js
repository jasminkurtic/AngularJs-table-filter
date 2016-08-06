var autoDrops = angular.module('autoDrops', ['ngRoute'])
.config(function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: '/Template/Home.html',
            controller: 'HomeController'
        })
    .otherwise('Home', {
        templateUrl: 'Template/Home.html',
        controller: 'HomeController'
    })

    $locationProvider.html5Mode(false).hashPrefix('!');
})