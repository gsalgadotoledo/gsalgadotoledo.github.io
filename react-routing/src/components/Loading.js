import React from 'react';

class Loading extends React.Component {
	
	render() {
		return (
			<div id="w">
		    <div className="container">
				<div className="row centered">
					<h6>Loading data...</h6>
					<hr className="aligncenter" />
				</div>
		    </div>
			</div>
		);
	}
}

export default Loading