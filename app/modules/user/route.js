/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {

	index: {
		url: "/user-index",		
		views: {
			"secured-sub-view": {
				controller: "userIndexController",
				templateUrl: "views/user/index.html"
			}
		}
	},
	create: {
		url: "/user-create",		
		views: {
			"secured-sub-view": {
				controller: "userCreateController",
				templateUrl: "views/user/create.html"
			}
		}
	}
	
}