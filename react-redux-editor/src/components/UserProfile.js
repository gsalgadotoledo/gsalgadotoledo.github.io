import React from 'react';

class UserProfile extends React.Component {
	
	render() {
		let img = `https://graph.facebook.com/${this.props.uuid}/picture`;
		
		return (
			<p>
        <img src={img} className="img-circle mr" height="40" />
        <nm>{this.props.name}</nm>
      </p>
		);
	}
}

export default UserProfile