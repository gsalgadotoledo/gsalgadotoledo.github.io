import React from 'react';
import * as Config from '../constants/Config';

class Footer extends React.Component {
	
	render() {
		return (
			<div id="f">
		    <div className="container">
		      <div className="row">
		        <div className="col-md-8 col-md-offset-2 centered">
		          <p className="mt">
		            <a href={this.props.github}><i className="ion-social-github"></i></a>
		            <a href={this.props.linkedin}><i className="ion-social-linkedin"></i></a>
		            <a href={'mailto:' + this.props.email}><i className="ion-paper-airplane"></i></a>
		          </p>
		        </div>
		      </div>
		    </div>
		  </div>
		);
	}
}

Footer.propTypes = {
	github: React.PropTypes.string,
	linkedin: React.PropTypes.string,
	email: React.PropTypes.string
}

Footer.defaultProps = {
	github: Config.GITHUB,
	linkedin: Config.LINKEDIN,
	email: Config.EMAIL
}

export default Footer