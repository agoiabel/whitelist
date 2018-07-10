var angular = require('angular');

var authModule = angular.module('authModule', []);

//define controllers
authModule.controller('authController', require('./controllers/authController'));