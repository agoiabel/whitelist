/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {
	secured: {
		abstract: true,
		controller: 'securedController',
		templateUrl: "views/secured/index.html"
	}
}