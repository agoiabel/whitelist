/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {
	index: {
		url: '/user/index',
		controller: 'userIndexController',
		templateUrl: "views/user/index.html"
	},
	create: {
		url: '/user/create',
		controller: 'userCreateController',
		templateUrl: "views/user/create.html"
	}
}