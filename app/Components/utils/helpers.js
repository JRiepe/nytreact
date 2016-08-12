// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');


///////////////////////////////////////////////////////////////////////
// NYT information

var authKey = "b865d6e6c727411ea54bb427804c92f9"

// Search Parameters Set variables to store your queryTerm, Number of results, Start year and End Year

// Helper Functions (in this case the only one is runQuery)
var helpers = {

	// This function serves our purpose of running the query to geolocate. 
	runQuery: function(searchTerm, beginYear, endYear){

			console.log(searchTerm, beginYear, endYear);

			// Query NY Times
			var queryURL = "http://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=" + searchTerm + "&limit=5";
			if (parseInt(beginYear)) {

			// Add the necessary fields
				beginYear = beginYear + "0101";

				queryURL = queryURL + "&begin_date=" + beginYear// Add the date information to the newly created URL variable
			
			} // end if

			if(parseInt(endYear)){

				// Add the necessary fields
				endYear = endYear + "1231";
				
				// Add the date information to the newly created URL variable
				queryURL = queryURL + "&end_date=" + endYear;
			} // end if

			return axios.get(queryURL)
			.then(function(response){

				//console.log(response.data.response.docs);
				return response.data.response.docs;
		})

	},

	// This function hits our own server to retrieve the record of query results
	getSaved: function(){

		return axios.get('/api/saved')
			.then(function(response){

				console.log(response);
				return response;
			});
	},

	// This function posts new searches to our database.
	postSaved: function(headline){

		return axios.post('/api/saved', {
			headline: main.headline,
			url: web_url,
		})
			.then(function(results){

				console.log("Posted to MongoDB");
				return(results);
			})
	},

	deleteSaved: function(headline){

		return axios.delete('/api/saved', {headline: headline})
			.then(function(results){

				console.log("Deleted from  MongoDB");
				return(results);
			})
	}

}


// We export the helpers function 
module.exports = helpers;