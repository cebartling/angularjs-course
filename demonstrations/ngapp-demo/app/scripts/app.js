'use strict';

var app = angular.module('ngappDemoApp', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
]);

app.config(function ($routeProvider) {
    $routeProvider.when('/', { templateUrl: 'views/main.html', controller: 'MainCtrl' });
    $routeProvider.otherwise({ redirectTo: '/' });
});
