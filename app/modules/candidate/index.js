var angular = require('angular');

var candidateModule = angular.module('candidateModule', []);

//define controllers
candidateModule.controller('candidateController', require('./controllers/candidateController'));