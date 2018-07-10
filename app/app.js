
require('angular');
require('angular-ui-router');

//project specific module
const authModule = require('./modules/auth');
const candidateModule = require('./modules/candidate');
const userModule = require('./modules/user');
const enumeratorModule = require('./modules/enumerator');
const dashboardModule = require('./modules/dashboard');

const app = angular.module('app', [
	'ui.router',

	//import app personal modules
	'authModule',
	'candidateModule',
	'userModule',
	'enumeratorModule',
	'dashboardModule'

]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {

	//switch to html5mode
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}

	$qProvider.errorOnUnhandledRejections(false)

	//define app routes
	$stateProvider
		.state('login', require('./modules/auth/route.js').login)
		.state('signup', require('./modules/auth/route.js').signup)
		
		.state('candidate/index', require('./modules/candidate/route.js').index)
		
		.state('user/index', require('./modules/user/route.js').index)
		.state('user/create', require('./modules/user/route.js').create)

		.state('enumerator/index', require('./modules/enumerator/route.js').index)
		.state('enumerator/create', require('./modules/enumerator/route.js').create)

		.state('dashboard/index', require('./modules/dashboard/route.js').index)

	$urlRouterProvider.otherwise('/login');
});