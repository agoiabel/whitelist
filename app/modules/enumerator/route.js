/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {

	index: {
		url: "/enumerator-index",		
		views: {
			"secured-sub-view": {
				controller: "enumeratorIndexController",
				templateUrl: "views/enumerator/index.html"
			}
		}
	},
	create: {
		url: "/enumerator-create",		
		views: {
			"secured-sub-view": {
				controller: "enumeratorCreateController",
				templateUrl: "views/enumerator/create.html"
			}
		}
	}

}