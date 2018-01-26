var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial']);

// app configuration
myApp.config(function($routeProvider) {
    console.log('config loaded');
    // define our client side routes
    $routeProvider
        .when('/addEmployee', {
            templateUrl: '/views/addEmployee.view.html',
            controller: 'AddEmployeeController as vm'
        })
        .when('/trackEmployee', {
            templateUrl: '/views/trackEmployee.view.html',
            controller: 'TrackEmployeeController as vm'
        })
        .when('/reports', {
            templateUrl: '/views/reports.view.html',
            controller: 'ReportsController as vm'
        })
        .otherwise(
            { redirectTo: '/reports' }
        );
    
});