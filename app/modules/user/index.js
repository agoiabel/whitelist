var angular = require('angular');

var userModule = angular.module('userModule', []);

//define controllers
userModule.controller('userIndexController', require('./controllers/userIndexController'));
userModule.controller('userCreateController', require('./controllers/userCreateController'));