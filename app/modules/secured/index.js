var angular = require('angular');

var securedModule = angular.module('securedModule', []);

//define controllers
securedModule.controller('securedController', require('./controllers/securedController'));
