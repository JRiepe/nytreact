// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	getInitialState: function(){
		return {
			//food: 6
		}
	},

	handleClick: function(){
		this.props.postSaved(this.state.headline);
	},


	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Top 5 Results</h3>
				</div>
				<div className="panel-body text-center">

					
					{/* Here we use a map function to loop through an array in JSX*/}
					{/*this.props.results.map(function(search, i)
						{
							return <tr><td key={i}>{search.headline}</td><td><button onClick={this.handleClick}>Save</button></td></tr> 
						}
					)*/}
					

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;