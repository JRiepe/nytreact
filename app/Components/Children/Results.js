// Include React 
var React = require('react');
var helpers = require('../utils/helpers.js');
// This is the results component
var Results = React.createClass({

	getInitialState: function(){
		return {
			results: []
		}
	},

	handleClick: function(){
		console.log('handleclick title results: ' + this.state.results.title)
		helpers.postSaved(this.state.results);
	},


	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Top 5 Results</h3>
				</div>
				<div className="panel-body text-center">

					{/* Here we use a map function to loop through an array in JSX  - <button onClick={this.handleClick}>Save</button>*/}

					{this.props.results.forEach(function(results, i) 
						{
							
							<li key={i}> {results.title} ></li>
							
						})
					}
					

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;