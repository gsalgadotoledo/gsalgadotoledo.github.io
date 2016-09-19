import React from 'react';

class Loading extends React.Component {
	
	render() {
		return (
			<div className="centered loading-container">
				<h6>Loading data...</h6>
				<hr className="aligncenter" />
			</div>
		);
	}
}

export default Loading