// Include React 
var React = require('react');

// This is the results component
var Results = React.createClass({

	getInitialState: function(){
		return {
			results: ""
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
					{this.props.results.map(function(results, i)
						{
							
							 return <p key={i}>{results.main.headline}> <form className="form-control" method="post" action="/api/saved"> <button onClick={this.handleClick}>Save</button></form></p>
						}
					)}
					

				</div>
			</div>

		)
	}
});

// Export the component back for use in other files
module.exports = Results;