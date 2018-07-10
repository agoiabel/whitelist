/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {
	login: {
		url: '/login',
		controller: 'authController',
		templateUrl: "views/auth/login.html"
	},
	signup: {
		url: '/signup',
		controller: 'authController',
		templateUrl: "views/auth/signup.html"
	}
}