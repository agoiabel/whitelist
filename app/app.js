
require('angular');
require('angular-ui-router');

//project specific module
const authModule = require('./modules/auth');
const candidateModule = require('./modules/candidate');
const userModule = require('./modules/user');
const enumeratorModule = require('./modules/enumerator');
const dashboardModule = require('./modules/dashboard');
const securedModule = require('./modules/secured');

const app = angular.module('app', [
	'ui.router',

	//import app personal modules
	'authModule',
	'candidateModule',
	'userModule',
	'enumeratorModule',
	'dashboardModule',
	'securedModule'

]);

app.config(function ($stateProvider, $urlRouterProvider, $locationProvider, $qProvider) {
	
	$qProvider.errorOnUnhandledRejections(false);

	//switch to html5mode
	if(window.history && window.history.pushState){
		$locationProvider.html5Mode(true);
	}

	//define app routes
	$stateProvider
		.state('login', require('./modules/auth/route.js').login)
		.state('signup', require('./modules/auth/route.js').signup)

		.state('secured', require('./modules/secured/route.js').secured)

		.state('secured.candidate-index', require('./modules/candidate/route.js').index)

		.state('secured.user-index', require('./modules/user/route.js').index)
		.state('secured.user-create', require('./modules/user/route.js').create)
		.state('secured.enumerator-index', require('./modules/enumerator/route.js').index)
		.state('secured.enumerator-create', require('./modules/enumerator/route.js').create)
		.state('secured.dashboard-index', require('./modules/dashboard/route.js').dashboard)

	$urlRouterProvider.otherwise('/login');
});