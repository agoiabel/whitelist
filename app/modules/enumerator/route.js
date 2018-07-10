/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {
	index: {
		url: '/enumerator/index',
		controller: 'enumeratorIndexController',
		templateUrl: "views/enumerator/index.html"
	},
	create: {
		url: '/enumerator/create',
		controller: 'enumeratorCreateController',
		templateUrl: "views/enumerator/create.html"
	}
}