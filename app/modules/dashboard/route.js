/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {

	dashboard: {
		url: "/dashboard-index",		
		views: {
			"secured-sub-view": {
				controller: "dashboardController",
				templateUrl: "views/dashboard/index.html"
			}
		}
	}

}