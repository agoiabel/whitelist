var angular = require('angular');

var enumeratorModule = angular.module('enumeratorModule', []);

//define controllers
enumeratorModule.controller('enumeratorIndexController', require('./controllers/enumeratorIndexController'));
enumeratorModule.controller('enumeratorCreateController', require('./controllers/enumeratorCreateController'));