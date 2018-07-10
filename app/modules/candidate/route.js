/**
 * Route for handling everything authentication
 * 
 * @type 
 */
module.exports = {

	index: {
		url: "/candidate-index",		
		views: {
			"secured-sub-view": {
				controller: "candidateController",
				templateUrl: "views/candidate/index.html"
			}
		}
	},

}