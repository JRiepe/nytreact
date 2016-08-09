// Include React 
var React = require('react');

// This is the history component. It will be used to show a log of  recent searches.
var History = React.createClass({

	getInitialState: function(){
		return {
			food: 6
		}
	},

	handleClick: function(){
		this.props.deleteHistory(this.state.headline);
	},
	// Here we render the function
	render: function(){

		return(

			<div className="panel panel-default">
				<div className="panel-heading">
					<h3 className="panel-title text-center">Saved Articles</h3>
				</div>
				<div className="panel-body text-center">

					{/* Here we use a map function to loop through an array in JSX*/}
					{this.props.history.response.map(function(search, i)
						{
							return <tr><td key={i}>{search.headline}</td><td><button onClick={this.handleClick}>Remove</button></td></tr> 
						}
					)}
				</div>
			</div>

		)
	}
});



// Export the component back for use in other files
module.exports = History;