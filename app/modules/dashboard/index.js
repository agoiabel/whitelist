var angular = require('angular');

var dashboardModule = angular.module('dashboardModule', []);

//define controllers
dashboardModule.controller('dashboardController', require('./controllers/dashboardController'));