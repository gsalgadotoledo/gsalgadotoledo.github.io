import React from 'react';

class ChildDiv extends React.Component {
	render() {
		return (
			<div className="col-md-4">
				<h4 className={this.props.classText}>{this.props.name}</h4>
			</div>
		);
	}
}

export default ChildDiv